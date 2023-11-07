import { stripe } from "@/app/service/stripe"
import axios from "axios"
import { NextResponse } from "next/server"
const jwt = require('jsonwebtoken')

export async function POST(req: Request) {
    try {
        const jwtToken = req.headers.get('authorization')?.replace('Bearer ', '')
        const user = jwt.decode(jwtToken, process.env.JWT_SECRET)

        if (!user || !user.sub) {
            return NextResponse.json({message: 'Unauthorized'}, { status: 401 })
        }

        const body = await req.json()
        const section = body.section
        const quantity = body.quantity
        const concertSessionId = body.concertSessionId
        const concertTitle = body.concertTitle

        const line_items = Array(quantity).fill(0).map((seat: string) => {
            return {
                price_data: {
                    currency: 'sgd',
                    product_data: {
                        name: `${concertTitle} Ticket Section ${section}`,
                        images: [body.imageUrl]
                    },
                    unit_amount: body.price * 100
                },
                quantity: 1
            }
        })

        console.log(user.id, section, concertSessionId, quantity)

        const stripeSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            metadata: {
                userId: user.id,
                sectionId: section,
                ticketsBought: quantity
            },
            success_url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/payment-successful`,
            cancel_url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/cancel`,
        })

        return NextResponse.json({ sessionId: stripeSession.id }, { status: 200 })
    } catch (e: any) {
        console.log(e.message)
        return NextResponse.json({message: e.message}, { status: 400 })
    }
}

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
        const concertId = body.concertId
        const concertTitle = body.concertTitle

        const line_items = Array(quantity).fill(0).map((seat: string) => {
            return {
                price_data: {
                    currency: 'sgd',
                    product_data: {
                        name: `${concertTitle} Ticket Section ${section}`,
                        images: ['https://static.ticketmaster.sg/images/activity/23_gidle_0f639bdb7563bc59155de00cafd8a431.jpg']
                    },
                    unit_amount: 20000
                },
                quantity: 1
            }
        })

        const stripeSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: line_items,
            mode: 'payment',
            metadata: {
                userId: user.id,
                sectionId: section,
                concertSessionId: concertId,
            },
            success_url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/payment-successful`,
            cancel_url: `${process.env.NEXT_PUBLIC_PRODUCTION_URL}/cancel`,
        })

        return NextResponse.json({ sessionId: stripeSession.id }, { status: 200 })
    } catch (e: any) {
        return NextResponse.json({message: e.message}, { status: 400 })
    }
}
import { stripe } from "@/app/service/stripe"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import { authOptions } from "../../auth/[...nextauth]/route"

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions)
        if (!session || !session.user || !(session.user.id)) {
            return NextResponse.redirect('/?error=You must be signed in to make a purchase', { status: 401 })
        }
        
        const body = await req.json()
        const seats = body.seats as string[]

        const line_items = seats.map((seat: string) => {
            return {
                price_data: {
                    currency: 'sgd',
                    product_data: {
                        name: 'G-IDLE Concert Ticket Seat ' + seat,
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
                userId: session.user.id
            },
            success_url: 'https://app.netrunner.tax/subscribe',
            cancel_url: 'https://app.netrunner.tax/subscribe',
        })

        return NextResponse.json({ sessionId: stripeSession.id }, { status: 200 })
    } catch (e: any) {
        console.log(e)
        return NextResponse.json({message: e.message}, { status: 400 })
    }
}
import { stripe } from "@/app/service/stripe"
import axios from "axios"
import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    const body = await req.text()
    const sig = headers().get('stripe-signature') ?? ""

    try {
        const event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
        if (event.type === 'checkout.session.completed') {
            const session = event.data.object
            const metadata = session.metadata

            const lineItems = await stripe.checkout.sessions.listLineItems(session.id)
            
            const res = await axios.post(process.env.BACKEND_URL + '/api/payment-completed', {
                ...metadata,
                quantity: lineItems.data.length,
            })
            
            return NextResponse.json({ }, { status: 200 })
        } else {
            throw new Error('Unhandled event type')
        }
    } catch (e: any) {
        return NextResponse.json({ "Webhook Error": e.message }, { status: 400 })
    }    
}

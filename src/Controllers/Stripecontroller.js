import axios from "axios";
import Stripe from "stripe";


class stripecontroller {
    async post(req, res) {

        const stripe = new Stripe(
            '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',
            {
                apiVersion: "2022-11-15",
                appInfo: {
                    name: "BarberApp",
                    version: "1"
                }
            }
        )

        const stripeuser = await stripe.customers.create({
            email: ''
        })


        const stripechekout = await stripe.checkout.sessions.create({
            customer: stripeuser.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                { price: 'price_1MPutVLfnJvk1J3hBqB1yQpJ', quantity: 1 }
            ],
            mode: "subscription",
            allow_promotion_codes: true,
            success_url: "http://localhost:3000/dashboard",
            cancel_url: "http://localhost:3000/dashboard"
        })
        return res.json(stripechekout.id)
    }

    async get(req, res) {
        const stripe = new Stripe(
            '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',
            {
                apiVersion: "2022-11-15",
                appInfo: {
                    name: "BarberApp",
                    version: "1"
                }
            }
        )
        const stripechekout = await stripe.checkout.sessions.list()

        return res.json(stripechekout)
    }

}

export default new stripecontroller();

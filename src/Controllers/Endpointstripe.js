import axios from 'axios';

import Stripe from 'stripe';

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

class Webhookcontroller {
    async post(req, res) {
        const sig = request.headers['stripe-signature'];
        const endpointSecret = "whsec_252b95382ed4b39400e0f1a2dcd051c1c0c9b69fd9a830863ac26b9214efc132";

        let event;

        try {
            event = await stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        } catch (err) {
            response.status(400).send(`Webhook Error: ${err.message}`);
            return;
        }
        switch (event.type) {
            case 'customer.subscription.deleted':
                // Caso ele cancele sua assinatura vamos deletar a assinatura dele
                break;
            case 'customer.subscription.updated':
                // caso tenha alguma atualziaçao na assintura
                break;
            case 'checkout.session.completed':
                // Criar a assinatura por que foi pago com sucesso!
                axios.put(`/usuarios/${''}`)

                break;
            default:
                console.log(`Evento desconhecido ${event.type}`)
        }

        return res.json(event)
    }
}
export default new Webhookcontroller();


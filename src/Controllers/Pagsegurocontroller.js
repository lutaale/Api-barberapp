import axios from "axios";

class Pagsegurocontroller {
    async post(req, res) {
        // const { reference_id, description, amount: { value, currency }, payment_method: { type, installments, capture, soft_descriptor, card: { number, exp_month, exp_year, security_code, holder_name: { name } } } } = req.body

        await axios.post('https://api.pagar.me/core/v5/orders', {
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                Authorization: 'Basic c2tfdGVzdF9vTVIzQjVPQzVmYVc1Sm1qOg==',
            },
            "items": [
                {
                    "amount": 15,
                    "description": "Barberapp",
                    "quantity": 1
                }
            ],
            "customer": {
                "name": "Tony Stark",
                "email": "avengerstark@ligadajustica.com.br"
            },
            "payments": [
                {
                    "payment_method": "credit_card",
                    "credit_card": {
                        "recurrence": true,
                        "installments": 1,
                        "statement_descriptor": "AVENGERS",
                        "card": {
                            "number": "4000000000000010",
                            "holder_name": "Tony Stark",
                            "exp_month": 1,
                            "exp_year": 30,
                            "cvv": "351",
                            "billing_address": {
                                "line_1": "10880, Malibu Point, Malibu Central",
                                "zip_code": "90265",
                                "city": "Malibu",
                                "state": "CA",
                                "country": "US"
                            }
                        }
                    }
                }
            ]
        })
            .then((value) => {
                return res.json(value)
            })
    }
}
export default new Pagsegurocontroller();

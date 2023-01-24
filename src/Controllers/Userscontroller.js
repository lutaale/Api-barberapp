import Users from '../schemas/Users'

class Userscontroller {

    async get(req, res) {
        const list = await Users.find()
        res.json(list)
    }
    async get2(req, res) {
        const { categoria } = req.query
        const list = await Users.find({ categoria: categoria })
        res.json(list)
    }

    async post(req, res) {
        const { nome, barbearia, email, senha, assinante } = req.body;

        const list = await Users.create({
            nome,
            barbearia,
            email,
            senha,
            assinante,

        })
        res.json(list)
    }

    async delete(req, res) {
        const { _id } = req.params
        const list = await Users.deleteOne({ _id: _id })

        res.json(list)
    }

    async update(req, res) {
        const { _id } = req.params
        const { nome, barbearia, email, senha, assinante } = req.body;

        const list = await Users.updateOne({ _id: _id }, {
            nome,
            barbearia,
            email,
            senha,
            assinante,
        })
        res.json(list)
    }
}

export default new Userscontroller();
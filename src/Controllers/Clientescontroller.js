import Clientes from "../schemas/Clientes";

class Clientescontroller {
    async post(req, res) {
        const { idSalao, nome, tipodecorte, valor, data, hora } = req.body
        const comentlist = await Clientes.create({
            idSalao,
            nome,
            tipodecorte,
            valor,
            data,
            hora
        })
        res.json(comentlist)
    }
    async updade(req, res) {
        const { _id } = req.params
        const { idSalao, nome, tipodecorte, valor, data, hora } = req.body
        const comentlist = await Clientes.updateOne({ _id: _id }, {
            idSalao,
            nome,
            tipodecorte,
            valor,
            data,
            hora
        })
        res.json(comentlist)
    }

    async get(req, res) {
        const { idSalao } = req.query
        const comentlist = await Clientes.find({ idSalao: idSalao })    
        res.json(comentlist)
    }
    async get2(req, res) {
        const { idSalao, data } = req.query
        const comentlist = await Clientes.find({ idSalao: idSalao, data: data })
        res.json(comentlist)
    }
    async delete(req, res) {
        const { _id } = req.params
        const comentlist = await Clientes.deleteOne({ _id: _id })
        res.json(comentlist)
    }
}

export default new Clientescontroller();
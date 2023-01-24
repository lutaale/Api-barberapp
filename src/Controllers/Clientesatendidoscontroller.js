import Clientesatendidos from "../schemas/Clientesatendidos";

class clientesatendidoscontroller {

    async post(req, res) {
        const { idsalaoclienteatendido, nome, tipodecorte, valor, data, hora } = req.body
        const list = await Clientesatendidos.create({
            idsalaoclienteatendido,
            nome,
            tipodecorte,
            valor,
            data,
            hora
        })
        return res.json(list)
    }
    async get(req, res) {
        const { idsalaoclienteatendido } = req.query
        const list = await Clientesatendidos.find({ idsalaoclienteatendido: idsalaoclienteatendido })

        return res.json(list)
    }
     async get2(req, res) {
        const { idsalaoclienteatendido,data } = req.query
        const list = await Clientesatendidos.find({ idsalaoclienteatendido: idsalaoclienteatendido,data:data })

        return res.json(list)
    }
}
export default new clientesatendidoscontroller();

import Cortes from '../schemas/Cortes'

class Cortescontroller {
    async post(req, res) {
        const { idsalaocorte, corte, valor } = req.body
        const list = await Cortes.create({
            idsalaocorte,
            corte,
            valor
        })
        res.json(list)
    }
    async update(req, res) {
        const { _id } = req.params
        const { idsalaocorte, corte, valor } = req.body
        const list = await Cortes.updateOne({ _id: _id }, {
            idsalaocorte,
            corte,
            valor
        })
        res.json(list)
    }
    async del(req, res) {
        const { _id } = req.params
        const list = await Cortes.deleteOne({ _id: _id })
        res.json(list)
    }
    async get(req, res) {
        const list = await Cortes.find()
        res.json(list)
    }
    async get3(req, res) {
        const { idsalao, data } = req.query
        const list = await Cortes.find({ idsalao: idsalao, data: data })
        res.json(list)
    }
    async get2(req, res) {
        const { idsalaocorte } = req.query

        const list = await Cortes.find({ idsalaocorte: idsalaocorte })
        res.json(list)
    }
}
export default new Cortescontroller();

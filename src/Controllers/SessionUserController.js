import SessionUser from "../schemas/SessionUser";

class SessionUserController {

    async post(req, res) {
        const { _iduser, nome, email } = req.body
        const list = await SessionUser.create({
            _iduser,
            nome,
            email
        })
        return res.json(list)
    }

    async get(req, res) {
        const { email } = req.query
        const list = await SessionUser.findOne({ email: email })
        return res.json(list)

    }
    async delete(req, res) {
        const { _iduser } = req.query
        const list = await SessionUser.deleteOne({ _iduser: _iduser })
        return res.json(list)
    }
}
export default new SessionUserController();
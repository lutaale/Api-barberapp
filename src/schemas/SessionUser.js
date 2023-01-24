import { model, Schema } from 'mongoose'


const SessionUser = new Schema({
    _iduser: String,
    nome: String,
    email: String,
})

export default new model('SessionUser', SessionUser)
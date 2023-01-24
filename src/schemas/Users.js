import { model, Schema } from 'mongoose'

const Users = new Schema({
    nome: String,
    barbearia: String,
    email: String,
    senha: String,
    assinante: Boolean,

})

export default new model('Users', Users)
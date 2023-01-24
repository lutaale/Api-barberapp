import { model, Schema } from 'mongoose'

const Cortes = new Schema({
    idsalaocorte: String,
    corte: String,
    valor: String
})

export default new model('Cortes', Cortes)

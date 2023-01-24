import { Schema, model } from 'mongoose'

const Clientesatendidos = new Schema({
    idsalaoclienteatendido: String,
    nome: String,
    tipodecorte: String,
    data: String,
    hora: String,
    valor: String,
})
export default new model('Clientesatendidos', Clientesatendidos)
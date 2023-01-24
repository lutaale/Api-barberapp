import { Schema, model } from 'mongoose'

const Clientes = new Schema({
    idSalao:String,
    nome: String,
    tipodecorte: String,
    valor:String,
    data: String,
    hora: String,
  
})

export default model('Clientes', Clientes)

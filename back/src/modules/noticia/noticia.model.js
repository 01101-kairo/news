const mongoose = require('./../../config/mongo.js')
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  titulo: String,
  img: String,
  texto: String,
  categoria: String,
},
  {timestamps: true}
)

const NoticiaModel = mongoose.model('noticias', usuarioSchema);
module.exports = NoticiaModel

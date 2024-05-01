const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const usuarioModel = require('./src/modules/usuario/usuario.model')
const noticiaModel = require('./src/modules/noticia/noticia.model')

const app = express()
app.use(express.json())




//campo login

app.post('/login', async (req, res)=>{
  if( !req.body.email){
    return res.status(400).json({
      message:'O campo email é obrigatório'
    })
  }
  if( !req.body.senha){
    return res.status(400).json({
      message:'O campo senha é obrigatório'
    })
  }

  const usuarioExistente = await usuarioModel.findOne({email: req.body.email})

  if(!usuarioExistente){
    return res.status(400).json({
      message:'O usuario não está cadastrado'
    })
  }

  const senhaVerificada= bcrypt.compareSync(
    req.body.senha,
    usuarioExistente.senha
  )
  if (!senhaVerificada){
    return res.status(400).json({message: 'E-mail ou senha incorreto'})
  }
  const token = jwt.sign({_id: usuarioExistente._id}, 'dnc')
  return res.status(400).json({
    message: 'login realizado com sucesso',
    token,
  })
})





//campo usuario

app.get('/usuarios', async (req, res)=>{
  const usuarios = await usuarioModel.find({})
  return res.status(200).json(usuarios)
})

app.post('/usuarios', async (req, res)=>{
  if( !req.body.email){
    return res.status(400).json({
      message:'O campo email é obrigatório'
    })
  }
  if( !req.body.senha){
    return res.status(400).json({
      message:'O campo senha é obrigatório'
    })
  }

  const usuarioExistente = await usuarioModel.find({email: req.body.email})

  if(usuarioExistente.length){
    return res.status(400).json({
      message:'O usuario já existente'
    })
  }

  const senhaCriptografada = bcrypt.hashSync(req.body.senha, 10)
  const usuario = await usuarioModel.create({
    nome: req.body.nome,
    email: req.body.email,
    senha: senhaCriptografada,
  })
  return res.status(201).jason(usuario)
})



//campo noticias

app.get('/noticias', async (req, res)=>{
  let filtroCategoria ={}
  if (req.query.categoria){
    filtroCategoria = {categoria: req.query.categoria}
  }

  const noticias = await noticiaModel.find(filtroCategoria)
  return res.status(200).json(noticias)
})

app.post('/noticias', async(req, res)=>{
  if(!req.body.titulo){
    return res.status(400).json({message: 'O campo titulo é  obrigatório'})
  }
  if(!req.body.img){
    return res.status(400).json({message: 'O campo imagem é  obrigatório'})
  }
  if(!req.body.texto){
    return res.status(400).json({message: 'O campo texto é  obrigatório'})
  }
  if(!req.body.categoria){
    return res.status(400).json({message: 'O campo categoria é  obrigatório'})
  }
  const noticia = await noticiaModel.create({
    titulo: req.body.titulo,
    img: req.body.img,
    texto: req.body.texto,
    categoria: req.body.categoria,
  })
  return res.status(201).json(noticia)
})

app.listen(8000,()=>{
  console.log("Servidor funcionando na porta 8000")
})

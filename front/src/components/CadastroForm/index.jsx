'use client'
import axios from 'axios'
import { useRouter  } from "next/navigation";
import { useState } from "react";

export default function CadastroForm() {
  const router = useRouter()
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  const aoSubmeter = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post('http://localhost:8000/usuarios', formulario)
      alert('usuario cadastrado com sucesso!')
      router.push('/admin/noticia/criar')
    } catch (error) {
      alert(error.response.data.message)
    }
    console.log('submetido', formulario)
  }

  const aoAlterarValores = (e) => {
    const {name, value}= e.target
    setFormulario(prevState => ({
      ...prevState, [name]: value
    }))
  }

  return (
    <form onSubmit={aoSubmeter}>
      <div><label htmlFor="nome">Nome</label><input    type="text"     name="nome"  onChange={aoAlterarValores}/></div>
      <div><label htmlFor="email">E-mail</label><input type="email"    name="email" onChange={aoAlterarValores}/></div>
      <div><label htmlFor="senha">Senha</label><input  type="password" name="senha" onChange={aoAlterarValores}/></div>
      <button type="submit">Enviar</button>
    </form>
  )
}

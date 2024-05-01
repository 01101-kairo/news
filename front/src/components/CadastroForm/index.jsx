'use client'
import { useState } from "react";

export default function CadastroForm() {
  const [formulario, setFormulario] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  const aoSubmeter = (e) => {
    e.preventDefault()
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

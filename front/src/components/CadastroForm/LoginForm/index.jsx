'use client'
import { useState  } from "react";

export default function LoginForm() {
  const [formulario, setFormulario] = useState({
    email: '',
    senha: ''
  })

  const aoSubmeter = (e) => {
    e.preventDefault()
    console.log('submetido', formulario)
  }
  const aoAlternarValores = (e) => {
    const {name, value} = e.target
    setFormulario({
      ...formulario,
      [name]: value
    })
  }

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" onChange={aoAlternarValores}/>
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input type="password" name="senha" onChange={aoAlternarValores}/>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}


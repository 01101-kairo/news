'use client'
import axios from 'axios'
import { useRouter  } from "next/navigation";
import { useState  } from "react";


export default function LoginForm() {
  const router = useRouter()
  const [formulario, setFormulario] = useState({
    email: '',
    senha: ''
  })

  const aoSubmeter = async (e) => {
    e.preventDefault()
    try {
      const result = await axios.post('http://localhost:8000/login', formulario)
      console.log(result.data.message) // Exibe a mensagem de resposta do servidor
      router.push('/admin/noticia/criar')
    } catch (error) {
      alert(error.response.data.message) //Exibe a mensagem de erro do servidor
    }
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


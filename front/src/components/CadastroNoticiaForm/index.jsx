'use client'
import axios from 'axios'
import { useState } from 'react';

export default function CadastroNoticiaForm() {
  const [titulo, setTitulo] = useState('');
  const [img, setImg] = useState('');
  const [texto, setTexto] = useState('');
  const [categoria, setCategoria] = useState('');

  const aoSubmeter = async (e) => {
    e.preventDefault(); // Evita o comportamento padrão de submit do formulário
    try {
      const formulario = {
        titulo,
        img,
        texto,
        categoria
      }
      const result = await axios.post('http://localhost:8000/noticias',formulario)
      alert('Noticia criada com sucesso') // Exibe a mensagem de resposta do servidor
      return router.push('/home')

    } catch (error) {
      alert(error.response.data.message) //Exibe a mensagem de erro do servidor
    }
  }

  const aoAlterarValores = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'titulo':
        setTitulo(value);
        break;
      case 'img':
        setImg(value);
        break;
      case 'texto':
        setTexto(value);
        break;
      case 'categoria':
        setCategoria(value);
        break;
      default:
        break;
    }
  }

  return (
    <form onSubmit={aoSubmeter}>
      <div>
        <label htmlFor="titulo">Titulo</label>
        <input type="text" name="titulo" onChange={aoAlterarValores} />
      </div>

      <div>
        <label htmlFor="img">Imagem</label>
        <input type="text" name="img" onChange={aoAlterarValores} />
      </div>

      <div>
        <label htmlFor="texto">Texto</label>
        <textarea type="text" name="texto" onChange={aoAlterarValores} />
      </div>

      <div>
        <label htmlFor="categoria">categoria</label>
        <select name="categoria" onChange={aoAlterarValores}>
          <option value="">--Please choose an option--</option>
          <option value="produto">produto</option>
          <option value="tecnologia">tecnologia</option>
          <option value="rh">RH</option>
          <option value="vendas">vendas</option>
        </select>
      </div>

      <button type="submit">Criar noticia</button>
    </form>
  );
}

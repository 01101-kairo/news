'use client'
import { useState } from 'react';

export default function CadastroNoticiaForm() {
  const [titulo, setTitulo] = useState('');
  const [img, setImg] = useState('');
  const [texto, setTexto] = useState('');

  const aoSubmeter = (e) => {
    e.preventDefault(); // Evita o comportamento padrão de submit do formulário
    console.log('submeteu', titulo, img, texto);
  };

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
      default:
        break;
    }
  };

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
      <button type="submit">Criar noticia</button>
    </form>
  );
}

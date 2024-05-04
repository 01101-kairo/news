'use client'
import Image from 'next/image';
import "./style.css"

export default function Noticia(props) {
  return (
    <div className='noticia'>
      <Image src={props.noticia.img} alt="noticia" width={150} height={150} />
      <time datetime={props.noticia.createdAt}>
        {new Date(props.noticia.createdAt).toLocaleDateString('pt-BR')}
      </time>
      <h2>{props.noticia.titulo}</h2>
      <p dangerouslySetInnerHTML={{__html: props.noticia.texto}}/>
    </div>
  )
}


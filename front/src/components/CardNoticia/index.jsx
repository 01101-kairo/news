'use client'
import Image from 'next/image';
import "./style.css"

export default function CardNoticia({noticia}) {
  return (
    <div  className="card-noticia">
      <Image src={noticia.img} alt={noticia.titulo} width={150} height={150} />
      <h2>{noticia.titulo}</h2>
      <p dangerouslySetInnerHTML={{__html: noticia.texto}}/>
      <hr/>
      <time datetime={noticia.createdAt}>
        {new Date(noticia.createdAt).toLocaleDateString('pt-BR')}
      </time>
    </div>
  )
}

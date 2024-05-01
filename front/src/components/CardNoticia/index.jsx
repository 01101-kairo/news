'use client'
import Image from 'next/image';

export default function CardNoticia({noticia}) {
  return (
    <div>
      <h2>{noticia.titulo}</h2>
      <Image src={noticia.img} alt={noticia.titulo} width={150} height={150} />
      <p dangerouslySetInnerHTML={{__html: noticia.texto}}/>
    </div>
  )
}

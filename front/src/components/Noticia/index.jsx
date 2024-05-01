'use client'
import Image from 'next/image';

export default function Noticia(props) {
  return (
    <div>
      <div>{props.noticia.titulo}</div>
      <Image src={props.noticia.img} alt="noticia" width={150} height={150} />
      <div dangerouslySetInnerHTML={{__html: props.noticia.texto}}/>
    </div>
  )
}


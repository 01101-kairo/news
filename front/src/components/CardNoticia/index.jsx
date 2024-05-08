'use client'
import Image from 'next/image';
import { useState } from "react";
import "./style.css"

export default function CardNoticia({noticia, temHouver = false}) {
  const [isHouver, setisHouver] = useState(false)
  return (
    <div  className="card-noticia">
      <div style={{position: 'relative'}}
        onMouseEnter={()=> setisHouver(temHouver? true:false)}
        onMouseLeave={()=> setisHouver(false)}
      >
        <div className='houver' style={{opacity: isHouver? '1':'0'}}>Clique aqui</div>
        <Image src={noticia.img} alt={noticia.titulo} width={150} height={150} />
      </div>
      <h2>{noticia.titulo}</h2>
      <p dangerouslySetInnerHTML={{__html: noticia.texto}}/>
      <hr/>
      <time datetime={noticia.createdAt}>
        {new Date(noticia.createdAt).toLocaleDateString('pt-BR')}
      </time>
    </div>
  )
}

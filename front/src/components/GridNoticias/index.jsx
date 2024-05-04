'use client'
import CardNoticia from "../CardNoticia"
import "./style.css"

export default function GridNoticias({noticias}) {
  return (
    <div className="grid-noticia">
      {noticias.map(noticia =>(
        <CardNoticia key={noticia.id} noticia={noticia}/>
      ))}
    </div>
  )
}

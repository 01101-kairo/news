'use client'
import CardNoticia from "./../CardNoticia";
import './style.css'
import Elipses from './../../libs/Elipses'

export default function LateralEsquerda({noticia}) {
  noticia.texto = Elipses(noticia.texto, 100)

  return (
    <aside className="mais-popular">
      <h3>MAIS POPULAR</h3>
      <CardNoticia noticia={noticia} temHouver={true}/>
    </aside>
  )
}

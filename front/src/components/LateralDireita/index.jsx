'use client'
import CardNoticia from "../CardNoticia";
import './style.css'
import Elipses from './../../libs/Elipses'

export default function LateralDireita({noticias}) {
  const noticiasComElipse = () =>{
    return noticias.map((noticia, index) =>{
      noticias.texto = Elipses(noticias.texto, 100)
      return <div key={index}  style={{marginBottom: '20px'}}>
        <CardNoticia noticia={ noticia }/>
      </div>
    })
  }

  return (
    <aside className="ultimas-noticias">
      <h3>Útimas noticias</h3>
      {noticias.lenght && noticiasComElipse()}
    </aside>
  )
}

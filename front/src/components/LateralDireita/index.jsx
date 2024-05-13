'use client'
import CardNoticia from "../CardNoticia";
import './style.css'
import Elipses from './../../libs/Elipses'

export default function LateralDireita({noticias}) {
  console.log('noticias', noticias)
  const noticiasComElipse = () => {
    return noticias.map((noticia, index) => {
      const textoElipsado = Elipses(noticia.texto, 100)
      return (
        <div key={index} style={{marginBottom: '20px'}}>
          <CardNoticia noticia={ {...noticia, texto: textoElipsado} }/>
        </div>
      )
    })
  }

  return (
    <aside className="ultimas-noticias">
      <h3>Útimas noticias</h3>
      {noticias.length && noticiasComElipse()}
    </aside>
  )
}

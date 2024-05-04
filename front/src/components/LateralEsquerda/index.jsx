'use client'
import CardNoticia from "./../CardNoticia";
import './style.css'

const Elipses = (text,max) => {
  return text.substr(0,max-1)+(text.length>max?' ...':'')
}

export default function LateralEsquerda() {
  const noticia ={
    img: 'https://via.placeholder.com/340x260',
    titulo: 'lorem',
    texto:`Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit
nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor
minim nulla est proident. Nostrud officia pariatur ut officia. Sit
irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia
dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident
adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod.
Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate
laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.
loremParaloremParasint cillum sint consectetur cupidatat.`,
    createdAt: new Date()
  }

  noticia.texto = Elipses(noticia.texto, 100)

  return (
    <div className="mais-popular">
      <h3>MAIS POPULAR</h3>
      <CardNoticia noticia={noticia}/>
    </div>
  )
}

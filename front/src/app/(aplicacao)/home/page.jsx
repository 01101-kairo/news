'use client'
import { useEffect, useState } from "react"
import axios from 'axios'
import Noticia from "./../../../components/Noticia"
import LateralEsquerda from "./../../../components/LateralEsquerda"
import LateralDireita from "./../../../components/LateralDireita"
import "./style.css"

export default function HomePage() {
  const [noticias, setNoticias] = useState([])

  const getNoticias = async () =>{
    try {
      const result = await axios.get('http://localhost:8000/noticias')
      setNoticias(result.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  useEffect(()=> {
    getNoticias()
  })
  return (
    <div className="container row">
      <div className="col-xl-3">
        <LateralEsquerda/>
      </div>
      <div className="col-xl-6 col-12">
        {noticias.map(noticia =>
          <Noticia key={noticia.id} noticia={noticia}/>
        )}
      </div>
      <div className="col-xl-3">
        <LateralDireita/>
      </div>
    </div>
  )
}

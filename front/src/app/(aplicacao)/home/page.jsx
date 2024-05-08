'use client'
import { useEffect, useState } from "react"
import axios from 'axios'
import Noticia from "./../../../components/Noticia"
import LateralEsquerda from "./../../../components/LateralEsquerda"
import LateralDireita from "./../../../components/LateralDireita"
import "./style.css"

export default function HomePage() {
  const [noticias, setNoticias] = useState([])
  const [ultimasNoticias, setUltimasNoticias] = useState([])

  const getNoticias = async () => {
    try {
      const result = await axios.get('http://localhost:8000/noticias')
      setNoticias(result.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  const getNoticiaMaisPopular = () => {
    if (noticias) {
      return noticias.find(noticia => noticia.isPopular)
    }
  }

  const getUltimasNoticias = () => {
    try {
      // Ordenar as notícias pelo campo de data em ordem decrescente
      const noticiasOrdenadas = noticias.sort((a, b) => new Date(b.data) - new Date(a.data));
      // Limitar o resultado a 3 notícias
      const ultimasNoticias = noticiasOrdenadas.slice(0, 3);
      setUltimasNoticias(ultimasNoticias);
    } catch (error) {
      console.error("Erro ao buscar as últimas notícias:", error);
    }
  }

  useEffect(()=> {
    getNoticias()
  }, [])

  useEffect(()=> {
    if (noticias.length > 0) {
      getUltimasNoticias()
    }
  }, [noticias])


  return (
    <div className="container row">

      <div className="col-xl-3">
        { getNoticiaMaisPopular() && <LateralEsquerda noticia={getNoticiaMaisPopular()}/>
        }
      </div>
      <div className="news col-xl-6 col-12">
        {noticias.map(noticia =>
          <Noticia key={noticia.id} noticia={noticia}/>
        )}
      </div>
      <div className="col-xl-3">{
        noticias[0] && <LateralDireita noticias={ultimasNoticias}/>
      }
      </div>
    </div>
  )
}

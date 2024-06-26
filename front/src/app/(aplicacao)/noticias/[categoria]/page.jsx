'use client'
import { useEffect, useState } from "react"
import axios from 'axios'
import GridNoticias from "@/components/GridNoticias";

export default function NoticiasPage({params}) {
  const [noticias, setNoticias] = useState([])

  const getNoticias = async () => {
    try {
      const result = await axios.get(`http://localhost:8000/noticias?categoria=${params.categoria}`)
      setNoticias(result.data)
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  useEffect(() => {
    getNoticias();
  }, [params.categoria])

  return (
    <div>
      <h1>{params.categoria.toUpperCase()}</h1>
      <GridNoticias noticias={noticias}/>
    </div>
  )
}

'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { GiHamburgerMenu } from "react-icons/gi";
import { FaWindowClose, FaCoffee  } from "react-icons/fa";

import Link from "next/link";
import './style.css'

export default function Menu() {
  const [menuLateral, setMenuLateral] = useState(false)
  const router = useRouter()
  return (
    <>
      <nav className='menu'>
        <button onClick={()=> setMenuLateral(!menuLateral)}><GiHamburgerMenu size='30px' /></button>
        <div className='logo'> <FaCoffee size='30px' />  <p>the news</p> </div>
        <button onClick={()=> router.push('/login')}>Login</button>
      </nav>
      { menuLateral &&
        <nav className='menu_lateral'>
          <button onClick={()=> setMenuLateral(!menuLateral)}>
            <b><FaWindowClose size='20px' /></b>
          </button>
          <ul>
            <li><Link href="/home">home</Link></li>
            <li><Link href="/noticias/produtos">Produto</Link></li>
            <li><Link href="/noticias/tecnologia">Tecnologia</Link></li>
            <li><Link href="/noticias/rh">RH</Link></li>
            <li><Link href="/noticias/vendas">Vendas</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}


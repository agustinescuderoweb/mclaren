import React from 'react'
import Image from 'next/image'
import styles from '@/componentes/menu.module.css'
import logo from '../../public/logo.png'
import flecha from '../../public/svg/flecha.svg'
import local from '../../public/svg/local.svg'

function menu() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.menu}>
        <Image className={styles.logo} src={logo}></Image>
        <span><h1>MODELS</h1><Image src={flecha}></Image></span>
        <span><h1>BESPOKE</h1><Image src={flecha}></Image></span>
        <span><h1>OWNERSHIP</h1><Image src={flecha}></Image></span>
        <span><h1>EXPERIENCE</h1><Image src={flecha}></Image></span>
        <span><h1>ABOUT</h1><Image src={flecha}></Image></span>
      </div>
      <div className={styles.locacion}>
        <Image className={styles.local} src={local}></Image>
      </div>
    </div>
  )
}

export default menu

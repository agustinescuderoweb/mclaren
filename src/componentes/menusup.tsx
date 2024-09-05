import React from 'react'
import styles from "@/componentes/menusup.module.css"
import Image from 'next/image'
import globe from '../../public/svg/globe.svg'
import flecha from '../../public/svg/flecha.svg'

function menusup() {
  return (
    <div className={styles.contenedor}>
      <div className={styles.global}>
        <Image className={styles.imaglobal} src={globe}></Image>
        <h1>GLOBAL</h1>
        <Image src={flecha}></Image>

      </div>
      <div className={styles.mcglaren}>
        <h1>McLAREN.COM / AUTOMOTIVE</h1>
        <Image src={flecha}></Image>
      </div>
    </div>
  )
}

export default menusup

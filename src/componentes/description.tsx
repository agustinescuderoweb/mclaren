import React from 'react'
import styles from '@/componentes/description.module.css'

function description() {
  return (
    <div className={styles.contenedor}>
        <div className={styles.contenido}>
        <div className={styles.titulo}><h1 className={styles.title}>THE FULL FORCE OF McLAREN</h1></div>
        <div className={styles.parrafo}><h1 className={styles.descripcion}></h1>Super-light engineering. Extreme power. Race-honed agility. <br></br> 
             We pour every drop of our expertise into our cars to give you <br></br>
             the most thrilling driving experience imaginable. This is the full <br></br>
             force of McLaren.
             <button className={styles.boton}>DISCOVER</button></div>
             </div>
    </div>
  )
}

export default description
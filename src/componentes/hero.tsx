'use client'

import React from 'react'
import Image from 'next/image'
import { useEffect } from 'react'
import auto from '../../public/auto.jpg'
import styles from '@/componentes/hero.module.css'

const hero = () => {
    useEffect(() => {
      const handleMouseMove = (e) => {
        const text = document.querySelector(`.${styles.texto}`);
  
        // Calcular el centro de la pantalla
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
  
        // Calcular la posición del ratón con respecto al centro
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

  
        // Movimiento del texto (en dirección opuesta al cursor)
        const textMoveX = -(mouseX / centerX) * 10; // Ajuste de sensibilidad (20)
        const textMoveY = -(mouseY / centerY) * 10; // Ajuste de sensibilidad (20)
  
        // Aplicar transformaciones
        if (text) text.style.transform = `translate(${textMoveX}px, ${textMoveY}px)`;
      };
  
      // Agregar el evento de movimiento del ratón
      document.addEventListener('mousemove', handleMouseMove);
  
      // Limpiar el evento cuando el componente se desmonte
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);


  return (
    <div className={styles.contenedor}>
    <div className={styles.texto}>
      <h1>PERFORMANCE AMPLIFIED</h1>
      <h2>THE NEW McLAREN <br></br> ARTURA SPIDER</h2>
      <button className={styles.boton}>DISCOVER</button>
      </div>
    <div className={styles.imag}>
      <Image className={styles.auto} src={auto}></Image>
      </div>
    </div>
  )
}

export default hero;

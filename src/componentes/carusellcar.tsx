'use client'
import { useState, useEffect, useRef } from 'react';
import styles from '@/componentes/carusellcar.module.css';

const carsData = [
  {
    name: 'Car 1',
    frames: Array.from({ length: 240 }, (_, i) => `/images/car1/imagen_${String(i + 1).padStart(3, '0')}.webp`),
  },
  {
    name: 'Car 2',
    frames: Array.from({ length: 240 }, (_, i) => `/images/car2/imagen_${String(i + 1).padStart(3, '0')}.webp`),
  },
  {
    name: 'Car 3',
    frames: Array.from({ length: 240 }, (_, i) => `/images/car3/imagen_${String(i + 1).padStart(3, '0')}.png`),
  },

];


const Carousel360 = () => {
  const [currentCarIndex, setCurrentCarIndex] = useState(0);
  const [currentFrame, setCurrentFrame] = useState(0);
  const totalFrames = carsData[0].frames.length;
  const viewerRef = useRef(null);

  // Función para manejar el movimiento del mouse
  const handleMouseMove = (e) => {
    const { width, left } = e.currentTarget.getBoundingClientRect();
    const mouseX = e.clientX - left;
    
    // Calcula el índice del fotograma basado en la posición del mouse
    const newFrame = Math.floor((mouseX / width) * totalFrames);
  
    // Asegúrate de que el índice esté dentro del rango permitido
    setCurrentFrame(Math.max(0, Math.min(totalFrames - 1, newFrame)));
  };
  
  
  
  
  
  const nextCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex + 1) % carsData.length);
    setCurrentFrame(0); // Reinicia el frame al cambiar de auto
  };

  const prevCar = () => {
    setCurrentCarIndex((prevIndex) => (prevIndex - 1 + carsData.length) % carsData.length);
    setCurrentFrame(0); // Reinicia el frame al cambiar de auto
  };

  // Cargar solo la imagen actual para optimizar el rendimiento
  useEffect(() => {
    const img = new Image();
    img.src = carsData[currentCarIndex].frames[currentFrame];
  }, [currentCarIndex, currentFrame]);

  return (
    <div className={styles.carousel360}>
      <div 
        className={styles.viewer}
        ref={viewerRef}
        onMouseMove={handleMouseMove}
      >
        <img
          src={carsData[currentCarIndex].frames[currentFrame]}
          alt={`Car ${currentCarIndex + 1} frame ${currentFrame}`}
          className={styles.image}
        />
      </div>
      <button className={styles.button} onClick={prevCar}>Previous</button>
      <button className={styles.button} onClick={nextCar}>Next</button>
    </div>
  );
};

export default Carousel360;

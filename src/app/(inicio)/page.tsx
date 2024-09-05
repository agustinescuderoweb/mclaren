import React from 'react'
import Menusup from '@/componentes/menusup'
import Menu from '@/componentes/menu'
import Hero from '@/componentes/hero'
import Carusel from '@/componentes/carusellcar'
import Descripcion from '@/componentes/description'
import Carusellcar from '@/componentes/carusellcar'

function page() {
  return (
    <div>
      <Menusup />
      <Menu />
      <Hero />
      <Carusellcar />
      <Descripcion />
    </div>
  )
}

export default page

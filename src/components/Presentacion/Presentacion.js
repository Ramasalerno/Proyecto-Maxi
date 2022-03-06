import React from 'react'
import Imagen from "../Imagenes/imgprincipal.png"
import "./PresentacionStyle.css"
import gif from "../Imagenes/gifscroll.gif"

export const Presentacion = () => {
  return (
    <div>
        <img src={Imagen} alt="Imagen Maxi fullstack developer" className='imgLaptop'/>

        <div className='absolute'>
          <img src={gif} alt="gif" className='gifScroll' />
          </div>
    </div>
  )
}

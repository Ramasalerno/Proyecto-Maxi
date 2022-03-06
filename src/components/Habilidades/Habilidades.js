import React from 'react'
import js from "../Imagenes/javascript.svg"
import css from "../Imagenes/css.svg"
import html from "../Imagenes/html.svg"
import php from "../Imagenes/php.svg"
import python from "../Imagenes/python.svg"
import {Container, Col, Row } from 'react-bootstrap';
import "./HabilidadesStyle.css"
import ajax from "../Imagenes/ajax.png"
import jquery from "../Imagenes/jquery.png"
import angular from "../Imagenes/angular.png"
import react from "../Imagenes/react.png"
import git from "../Imagenes/git.png"
import gif from "../Imagenes/gifLoading.gif"

export const Habilidades = () => {
  return (
      <div>
    <Container className='mt-5'>
        <div>
            <h2>HABILIDADES</h2>
                <Container className='mt-5' id='misHabilidades'>
                    <h5 className='tituloLenguajes'>Lenguajes</h5>
                    <Row md={5}>
                        <Col className='columnaHab'>
                        <img src={js} alt="Imagen logo javascript" 
                        className='mx-auto imgSvg'/>
                        <p>JAVASCRIPT</p>
                        </Col>

                        <Col className='columnaHab'>
                        <img src={css} alt="Imagen logo css" className='mx-auto'/>
                        <p>CSS</p>
                        </Col>

                        <Col className='columnaHab'>
                        <img src={html} alt="Imagen logo html" className='mx-auto'/>
                        <p>HTML</p>
                        </Col>

                        <Col className='columnaHab'>
                        <img src={php} alt="Imagen logo PHP" className='mx-auto'/>
                        <p>PHP</p>
                        </Col>

                        <Col className='columnaHab'>
                        <img src={python} alt="Imagen logo python" className='mx-auto'/>
                        <p>PYTHON</p>
                        </Col>
                    </Row>
                </Container>
        </div>
    </Container>

        <Container className='mt-5'>
        <div>   
                <Container className='mt-5' id='misHabilidades'>
                    <h5 className='tituloLenguajes'>Herramientas y Frameworks</h5>
                    <Row md={5}>
                        <Col className='columnaHab'>
                        <img src={ajax} alt="Imagen logo ajax" 
                        className='mx-auto imgSvg'/>
                        <p>AJAX</p>
                        </Col>

                        <Col className='columnaHab'>
                        <img src={jquery} alt="Imagen logo jquery" className='mx-auto'/>
                        <p>JQUERY</p>
                        </Col>

                        <Col className='columnaHab'>
                        <img src={angular} alt="Imagen logo angular" className='mx-auto'/>
                        <p>ANGULAR</p>
                        </Col>

                        <Col className='columnaHab'>
                        <img src={react} alt="Imagen logo react" className='mx-auto'/>
                        <p>REACT</p>
                        </Col>

                        <Col className='columnaHab'>
                        <img src={git} alt="Imagen logo git" className='mx-auto'/>
                        <p>GIT</p>
                        </Col>
                    </Row>
                </Container>
        </div>

        <div className='absolute mt-5'>
        <img src={gif} alt="Imagen cargando" className='mx-auto gifHabilidades'/>
        </div>
        <div className='absolute mt-5'>
            <h6 className='devMobile'> Quiero continuar capacitandome, ¡Desarrollo mobile es el próximo paso!</h6>
        </div>
        </Container>
    </div>
  )
}

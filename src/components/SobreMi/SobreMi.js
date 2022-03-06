import React from 'react'
import { Card, Container } from 'react-bootstrap';
import img from "../Imagenes/image63.png"
import "./SobreMiStyle.css"

export const SobreMi = () => {
  return (
    <div id='sobreMi'>

            <Container>
                <Card className='mx-auto tarjeta' >
                    <Card.Img className="imgCard" variant="left" src={img} />
                    <Card.Body>
                        <Card.Title>SOBRE MÍ</Card.Title>
                
                        <Card.Text>
                        Viniendo del mundo de las Relaciones Públicas, me embarque en un nuevo desafío como estudiante de Desarrollo Full Stack. Actualmente asisto a la academia digital CODERHOUSE, donde he aprendido a desarrollar páginas web.
                        El mundo digital es algo que me apasiona por lo cual, me seguiré capacitando de manera constante.
                        </Card.Text>

                        <Card.Text>
                        <span className='spanCard'>A lo que aspiro:</span><br/>
                        Voy a estar capacitándome y adquiriendo nuevos conocimientos de manera constante ya que busco poder crear y desarrollar en todas sus posibilidades, tanto en proyectos en grupo como individuales.
                        </Card.Text>
                
                    </Card.Body>
                </Card>
            </Container>
    </div>
  )
}

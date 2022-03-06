import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import "./NavbarStyle.css"

export const Barra1 = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg" className='barraNav' variant="dark" fixed="top">
  <Container>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mx-auto">
      <Nav.Link href="#sobreMi">Sobre mí</Nav.Link>
      <Nav.Link href="#misHabilidades">Habilidades</Nav.Link>
      <Nav.Link href="#">Proyectos</Nav.Link>
      <Nav.Link href="#">Contacto</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  )
}

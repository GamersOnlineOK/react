import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Component } from 'react';
import { Navbar, Nav, Form,FormControl,Button } from 'react-bootstrap';

class Bar extends Component{
  render(){
    return ( 
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">
          Gamers Online
          </Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Inicio</Nav.Link>
          <Nav.Link href="#features">Tienda</Nav.Link>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Busqueda de Producto" className="mr-sm-2" />
          <Button variant="outline-light">Buscar</Button>
        </Form>
      </Navbar>
      );
  }
}

export default Bar;
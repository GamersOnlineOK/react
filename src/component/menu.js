
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CartWidget from "./CartWidget.js";
import { Navbar, Nav, Form,FormControl,Button } from 'react-bootstrap';

function Menu() { 
    return(
        <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">
      Gamers Online
      </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Inicio</Nav.Link>
      <Nav.Link href="#features">Tienda</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
      
    </Nav>
    <CartWidget/>
    
    <Form inline>
      <FormControl type="text" placeholder="Busqueda de Producto" className="mr-sm-2" />
      <Button variant="outline-light">Buscar</Button>
    </Form>
  </Navbar>
    )
 }
 export default Menu;
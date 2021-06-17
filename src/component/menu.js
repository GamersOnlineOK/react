
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CartWidget from "./CartWidget.js";
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Menu() {
  return (
    

    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Link>
              <NavLink activeClassName="text-dark" exact to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName="text-dark" to="/about">Nosotros</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName="text-dark" to="/products">Productos</NavLink>
            </Nav.Link>

          </ul>
          <CartWidget />
          <form class="d-flex">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Menu;
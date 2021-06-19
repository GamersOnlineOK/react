
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CartWidget from "./CartWidget.js";
import logo from '../logoGm.png';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

function Menu() {
  

  return (
    

    <nav className="navbar navbar-expand-lg navbar-dark bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><img height="auto" width="120px" src={logo} /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Nav.Link>
              <NavLink activeClassName="text-dark" exact to="/">Home</NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink activeClassName="text-dark" to="/about">Nosotros</NavLink>
            </Nav.Link>
            

          </ul>
          <CartWidget />
          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  )
}
export default Menu;
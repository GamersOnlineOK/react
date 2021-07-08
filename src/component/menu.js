import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import CartWidget from "./CartWidget.js";
import logo from '../logoGm.png';
import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import Popper from 'popper.js';
import ProductCategory from './ProductCategory.js';
import { useMainConsume } from '../provider/MainProvider.js';
import FilterCategory from './js/filterCategory.js';

function Menu(props) {
  const {totalItem}=useMainConsume();
    const{totalGlobal}=useMainConsume();
  const [data, setData] = useState(null);
 
  useEffect(() => {
    const timeOut = setTimeout(() => {
      fetch(`https://api.mercadolibre.com/sites/MLA/search?nickname=${props.nickName}`)
        .then((res) => res.json())
        .then((res) => {
          setData(res.results);
          console.log(res.results);
        });
    }, 1500);
    return () => {
      clearTimeout(timeOut);
    };
  }, [props.onSelect]);




  const { newArray } = FilterCategory(data);
  console.log(newArray);
  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-white">
      <div className="container-fluid">
        <NavLink activeClassName="navbar-brand" exact to="/">

          <img height="auto" width="120px" src={logo} />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavLink activeClassName="text-dark" className="nav-link" exact to="/">Home</NavLink>
              <NavLink activeClassName="text-dark" className="nav-link" to="/about">Nosotros</NavLink>
              <NavLink activeClassName="text-dark" className="nav-link" to="/carrito">Carrito</NavLink>
              <NavLink activeClassName="text-dark" className="nav-link" to="/Panel-Admin">Panel Admin</NavLink>
              <NavLink className="nav-item dropdown" to="/about">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorias
                </a>
                <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
                
                  {
                    newArray.map((newArray, index) => {
                      return <ProductCategory key={index} category={newArray.category_id} />
                    })
                  }
                  
                </ul>
              </NavLink>
            </ul>
          </div>
          {totalGlobal !== 0 ? (<CartWidget monto={totalGlobal} cantidad={totalItem} />):(
                        <p></p>
                )}

          
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
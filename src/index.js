import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Producto from './component/productos'


ReactDOM.render(
  <React.StrictMode>
    
    <App/>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);
ReactDOM.render(
  <React.StrictMode>
    
    <Producto title="Producto 1" description="Descripcion de Producto uno" stock="100"/>
    <Producto title="Producto 2" description="Descripcion de Producto dos" stock="0"/>
    <Producto title="Producto 3" description="Descripcion de Producto tres" stock="100"/>
    <Producto title="Producto 4" description="Descripcion de Producto cuatro" stock="0"/>
  </React.StrictMode>,
  document.getElementById('Products')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ItemListContainer from './component/itemListContainer'
import AppRouter from './router/AppRouter';


ReactDOM.render(
  <React.StrictMode>
    
    <App/>
        
  </React.StrictMode>,
  document.getElementById('root')
);
// ReactDOM.render(
//   <React.StrictMode>
//     <ItemListContainer/>
//   </React.StrictMode>,
//   document.getElementById('Products')
// )

reportWebVitals();

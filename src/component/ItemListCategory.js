import logo from "./logo192.png"
import { Card, Col, Button, Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Item from './item'
import useAddStock from "./js/main";


function ItemList(props) {
    const cart = [""];
    const stock = props.stock;
    const [data, setData] = useState(null);
    const[object,setObject]=useState();
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?nickname=PARATUCASASHOP`)
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
    console.log("hola");
   
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {data !== null ? (
                data.map((data, index) => {
                    if ((data.category_id) == (props.category)) {
                        
                    return <Item key={data.id} id={data.id} title={data.title} price={data.price} stock={data.available_quantity} img={data.thumbnail} btnText="Agregar al Carrito" />
                    } else {
                        
                    }
                    
                })
            ) : (
                <h3 className="text-center mt-5">

                    <Spinner animation="grow" variant="success" />Cargando</h3>
            )}

        </div>

    );



}


export default ItemList;

import { Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import Item from './item'


function ItemList(props) {
    
    const [data, setData] = useState(null);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetch(`https://api.mercadolibre.com/sites/MLA/search?nickname=${props.nickName}`)
                .then((res) => res.json())
                .then((res) => {
                    setData(res.results);
                    
                });
        }, 500);
        return () => {
            clearTimeout(timeOut);
          };
        }, [props.onSelect]);
        
            return (
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {data !== null ? (
                        data.map((data, index) => {
                            return <Item key={data.id} id={data.id} title={data.title} price={data.price} stock={data.available_quantity} img={data.thumbnail} btnText="Agregar al Carrito" />
                        })
                    ) : (
                        <h3 className="text-center mt-5">
                            
                        <Spinner animation="grow" variant="success" />Cargando</h3>
                    )}

                </div>

            );
        

    
}


export default ItemList;
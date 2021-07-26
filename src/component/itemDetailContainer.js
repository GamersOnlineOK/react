import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ItemDetail from './itemDetail';

function ItemDetailContainer(props) {
    const { productDetail } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${productDetail}`)
                .then((res) => res.json())
                .then((res) => {
                    setData(res);
                });
        }, 100);
        return () => {
            clearTimeout(timeOut);
        };
    }, [props.onSelect]);
    

    return (
        <div className="container">
        <div className="row d-flex justify-content-center">
           {data !== null ? (
                        
                             <ItemDetail key={data.id} id={data.id} title={data.title} price={data.price} stock={data.available_quantity} img={data.pictures[0].url} attr={data.attributes} btnText="Pagar" />
           
                    ) : (
                        <h3 className="text-center mt-5">
                            
                        <Spinner animation="grow" variant="success" />Cargando</h3>
                    )}
        
        </div>
    </div>
    );
}

export default ItemDetailContainer;
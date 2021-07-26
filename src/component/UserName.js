import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Item from './item';
import { Spinner } from 'react-bootstrap';

function UserName(props) {
    const { UserName } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${UserName}`)
                .then((res) => res.json())
                .then((res) => {
                    setData(res);
                    
                });
        }, 1500);
        return () => {
            clearTimeout(timeOut);
        };
    }, []);
    console.log(data);

    return (
        <div classNameName="container">
        <div classNameName="row d-flex justify-content-center">
           {data !== null ? (
                        
                            
                             <Item key={data.id} id={data.id} title={data.title} price={data.price} stock={data.available_quantity} img={data.thumbnail} btnText="Pagar" />
           
                    ) : (
                        <h3 classNameName="text-center mt-5">
                            
                        <Spinner animation="grow" variant="success" />Cargando</h3>
                    )}
        
        </div>
    </div>
    );
}

export default UserName;
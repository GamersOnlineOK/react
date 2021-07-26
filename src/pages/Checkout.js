import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useMainConsume } from '../provider/MainProvider';
import { getFirestore, storage } from '../firebase/firebase';
import DetailCheckout from './DetailCheckout';
import { useState } from 'react';
import SuccessCheckout from './SuccessCheckout';

function Checkout(props) {
    const { carts } = useMainConsume();
    const {cartinitialState}=useMainConsume();
    const{totalGlobal}=useMainConsume();
    const [loading, setLoading] = useState();
    const [error, setError] = useState();
    const [ProductId, setProductsId] = useState();
    const [pago,setPago]=useState(false);
    const[userName,setUserName]=useState();
        

    function cargarUser(url) {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        setUserName(name);
        var date=new Date();

        
        const db = getFirestore();
        const venta = db.collection("ventas");
        const newSale= {
            name:name,
            phone:phone,
            email:email,
            fechadeCompra:date,
            detalle:carts
        }
        venta.add(newSale).then(({ id }) => {
            setProductsId(id);
        }).catch(e => {
            setError(e);
        }).finally(() => {
            setLoading(false);
            setPago(true);
            cartinitialState([]);


        })
    }
    
    if (pago == false) {
        return (
        <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-12 col-md-5">
                <h3 className="border-bottom">Datos para el pago</h3>
                
                    <div className="row">
                        <div className="mb-3 col">
                        <label for="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" />
                        
                    </div>
                    <div className="mb-3 col">
                        <label for="phone" className="form-label">Telefono</label>
                        <input type="text" className="form-control" id="phone"/ >
                        
                    </div>
                    </div>
                    
                    <div className="mb-3">
                        <label for="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="email" />
                        
                    </div>
                                       
                    
                    <button type="submit" onClick={cargarUser} className="btn btn-success">Realizar Pago</button>
                
            </div>
            <div className="col-12 col-md-5">
                <h3 className="border-bottom">Detalle de tu compra</h3>
                <ul className="list-group list-group-numbered">
                {carts !== null? (
                carts.map((data, index) => {
                   
                    return <DetailCheckout key={data.id} total={data.total} cantidad={data.cantidad} title={data.title}/>                })
            ) : (
                <h3 className="text-center mt-5">

                    <Spinner animation="grow" variant="success" />Cargando</h3>
            )}
                    
                </ul>
                <div>
                    <ul className="list-group mt-3 ">
                        <li className="list-group-item  d-flex justify-content-end align-items-end text-success"> <h5><span classNameName="text-dark">Total:</span> {totalGlobal}</h5></li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    );
    } else {
        return (
            <div>
                <SuccessCheckout name={userName} id={ProductId}/>
            </div>
        )
    }
    
}

export default Checkout;
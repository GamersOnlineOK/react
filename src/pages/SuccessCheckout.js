import React from 'react';
import { Link } from 'react-router-dom';

function SuccessCheckout(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-4">
                    
                    <div className="alert alert-success d-flex align-items-center mt-5" role="alert">
                        <div>
                            Pago realizado con exito
                        </div>
                    </div>
                    <div>
                        <h4><span className="text-primary">¡Gracias!</span> por tu compra <span>{props.name}</span></h4>
                        <p className="mt-2">Tu pedido esta siendo preparado.</p>
                        <p>Codigo: <span className="text-success fw-bold">{props.id}</span> </p>
                        <p>Te avisaremos cuando sea despachado</p>
                        <Link to="/"> <button className="btn btn-primary">Seguir Comprando</button></Link>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default SuccessCheckout;
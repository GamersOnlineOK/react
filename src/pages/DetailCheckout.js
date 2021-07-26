import React from 'react';

function DetailCheckout(props) {
    return (
        <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                        <div>
                            <div class="fw-bold ">{props.title}</div>
                            <span class="badge bg-success text-light rounded-pill">Cantidad: {props.cantidad}</span>
                            
                        </div>
                    
                      {props.img}
                    </div>
                    <h5>${props.total}</h5>
                  </li>
    );
}

export default DetailCheckout;
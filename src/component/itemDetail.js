import React from 'react';
import { Link } from 'react-router-dom';
function itemDetail(props) {
    return (
        <div className="col-10">
            <div className="row bg-white m-3 p-3 rounded shadow">
                <div className="col-12 col-md-5 d-flex flex-column align-content-center">
                    <img className="img-fluid p-5" src={props.img}/>
                    <div className="d-flex justify-content-around">
                        <Link to={`/`}>
                            <button className="btn btn-primary"> Volver</button>
                        </Link>
                        
                    </div>
                </div>
                <div className="col-12 col-md-7">
                    <h5>{props.title}</h5>
                    <p className="p-3 border-bottom border-top text-secondary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                          like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="d-flex justify-content-around">
                        <h5 className="text-success text-center"><span className="text-dark">Precio $ </span>{props.price}</h5>
                        <Link to={`/productos/${props.id}`}>
                            <button className="btn btn-success"> Comprar</button>
                        </Link>
                        
                    </div>

                </div>
            </div>

        </div>
    );
}

export default itemDetail

import React from 'react';
import { Link } from 'react-router-dom';
function itemDetail(props) {
    return (
        <div className="col">
            <div className="row bg-white m-5 p-5 rounded shadow">
                <div className="col-4 d-flex align-content-center">
                    <img className="img-fluid" src={props.img}/>
                </div>
                <div className="col-8">
                    <h3>{props.title}</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                         It has survived not only five centuries, but also the leap into electronic typesetting,
                          remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                          like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    <div className="d-flex justify-content-around">
                        <Link to={`/`}>
                            <button className="btn btn-primary"> Volver</button>
                        </Link>
                        <h4 className="text-success"><span className="text-dark">Precio $ </span>{props.price}</h4>
                        <button className="btn btn-success"> Comprar</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default itemDetail

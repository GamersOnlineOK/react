
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Item from './item';
import { Spinner } from 'react-bootstrap';
import ItemList from './itemList';

function ItemListContainer() {
    return (
        <div>
            <div>
                <img src="./notebook.jpg" className="img-fluid w-100" alt="" />

            </div>
            <div className="container-fluid">
                <div className="row justify-content-center mt-5">
                    <div className="col-xs-12 col-md-1">

                    </div>
                    <div className=" col-xs-12 col-md-10 ">
                        <ItemList />
                    </div>
                    <div className="col-xs-12 col-md-1">

                    </div>

                </div>
            </div>

        </div>
    )
}
export default ItemListContainer;
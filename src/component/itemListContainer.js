
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Item from './item';
import { Spinner } from 'react-bootstrap';
import ItemList from './itemList';

function ItemListContainer() {
    return (
    
            <div className="row justify-content-center mt-5">
                <div className="col-xs-12 col-md-2">

                </div>
                <div className=" col-xs-12 col-md-8 ">
                    <ItemList />
                </div>
                <div className="col-xs-12 col-md-2">

                </div>
                
            </div>
        
    )
}
export default ItemListContainer;
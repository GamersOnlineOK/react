
import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Item from './item';
import { Spinner } from 'react-bootstrap';
import Banner from './Banner';
import ItemList from './itemList';


function ItemListCategory() {
    return (
        <div>
            <Banner/>
            <div className="container-fluid">
                <div className="row justify-content-center mt-5">
                    <div className="col-xs-12 col-md-1">
                        
                    </div>
                    <div className=" col-xs-12 col-md-10 ">
                        <ItemList nickName="PARATUCASASHOP" />
                    </div>
                    <div className="col-xs-12 col-md-1">

                    </div>

                </div>
            </div>

        </div>
    );
}

export default ItemListCategory;


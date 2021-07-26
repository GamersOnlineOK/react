
import React from 'react';

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
                    <div className=" col-xs-12 col-md-8 ">
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


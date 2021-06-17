
import React from 'react';
import ItemList from './itemList';

function ItemListContainer() {
    return (
    
            <div className="row justify-content-center mt-5">
                <div className="col-xs-12 col-md-2">

                </div>
                <div className=" col-xs-12 col-md-8 ">
                    <ItemList title="algo" description="algo mas raro" stock="100" />
                </div>
                <div className="col-xs-12 col-md-2">

                </div>
                
            </div>
        
    )
}
export default ItemListContainer;
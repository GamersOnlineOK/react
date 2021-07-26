import React from 'react';
import { useParams } from 'react-router-dom';
import ItemListCategory from './ItemListCategory';

function ItemListCategoryContainer(props) {
  
    const { UserCategory } = useParams();
    
    return (
        <div>
            
            <div className="container">
                <ItemListCategory category={UserCategory}/>
            </div>
            
        </div>
    );
}

export default ItemListCategoryContainer;
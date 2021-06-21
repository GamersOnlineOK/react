import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ItemListCategory from './itemListContainer';


function ItemListCategoryContainer(props) {
  
    const { UserCategory } = useParams();
    const [data, setData] = useState(null);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetch(`https://api.mercadolibre.com/items/${UserCategory}`)
                .then((res) => res.json())
                .then((res) => {
                    setData(res);
                    
                });
        }, 1500);
        return () => {
            clearTimeout(timeOut);
        };
    }, [props.onSelect]);
    console.log(data);
    return (
        <div>
            <h3>Categorias</h3>
            <ItemListCategory/>
        </div>
    );
}

export default ItemListCategoryContainer;
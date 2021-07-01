import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductCategory(props) {

    const [data, setData] = useState(null);
    useEffect(() => {
        const timeOut = setTimeout(() => {
            fetch(`https://api.mercadolibre.com/categories/${props.category}`)
                .then((res) => res.json())
                .then((res) => {
                    setData(res.name);
                });
        }, 1500);
        return () => {
            clearTimeout(timeOut);
        };
    }, [props.onSelect]);
    return (
        <li className="nav-item" >

            <NavLink className="nav-link" id={props.category} to={`/productos/categoria/${props.category}`}>{data}</NavLink>
        </li>
    );
}

export default ProductCategory;
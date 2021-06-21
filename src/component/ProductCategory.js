import React from 'react';
import { NavLink } from 'react-router-dom';

function ProductCategory(props) {

    

        return (
        <>

            <NavLink className="nav-link" id={props.category} to="/about">{props.category}</NavLink>
        </>
    );
}

export default ProductCategory;
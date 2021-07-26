import React from 'react';
import { Spinner } from 'react-bootstrap';
const FilterCategory= data =>{
    const newArray = [];
    if (!data==false) {
        data.forEach(obj => {
            if (!newArray.some(o => o.category_id === obj.category_id)) {
              newArray.push({ ...obj })
              
            }
       
          });
        
    } else {
      <h3 className="text-center mt-5">
                            
      <Spinner animation="grow" variant="success" />Cargando</h3>
        
    }
    
return {newArray}
    
}
export default FilterCategory;
import React from 'react';
const FilterCategory= data =>{
    const newArray = [];
    if (!data==false) {
        console.log("true");
        data.forEach(obj => {
            if (!newArray.some(o => o.category_id === obj.category_id)) {
              newArray.push({ ...obj })
              
            }
       
          });
        
    } else {
        console.log("false");
        
    }
    
return {newArray}
    
}
export default FilterCategory;
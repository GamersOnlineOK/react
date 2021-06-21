import React from 'react';
const useAddStock= stock =>{

    const [clicks, setClicks] = React.useState(1);
    const restar=()=>{
        if (clicks > 1) {
            setClicks(clicks - 1);
        }
    }
    const aumentar=()=>{
        if (clicks < stock) {
            setClicks(clicks + 1);
        }
    }
return {clicks, restar, aumentar}
    
}
export default useAddStock;
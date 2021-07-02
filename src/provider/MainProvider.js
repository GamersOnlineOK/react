import React, { useContext, useState, createContext } from 'react'
import $ from 'jquery';
import useAddStock from '../component/js/main';
import Swal from 'sweetalert2'



const MainContext = createContext()

export function useMainConsume() {
    return useContext(MainContext)
}
export function MainProvider({ children }) {
    const [addCart, setAddCart] = useState(1);
    const [carts, setCarts] = useState([]);
    const { clicks } = useAddStock();
    const [totalGlobal, settotalGlobal]=useState(0);
    const [totalItem, setTotalItem]=useState(0);
    
    
    function addToWCart() {
        setAddCart(prevAddCart => prevAddCart + 1)
    }
    function sendCart(itemObj) {
        var clicks = itemObj.cantidad;
        $("#messege").empty();
        $("#messege").append(`<h6 class="p-3">${clicks} x  agregado al Carrito</h6>`).fadeIn(500).delay(800).fadeOut(800);
        
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Agregado al carrito ',
            showConfirmButton: false,
            timer: 1500
          })
        console.log(itemObj.id);
        var ArrObj = carts.find(el => el.id == itemObj.id);
        if (ArrObj) {
            console.log(ArrObj.id);
            console.log("Cantidad " + ArrObj.cantidad);
            let add = (ArrObj.cantidad) + (itemObj.cantidad);
            let total = (add) * (ArrObj.price)
            console.log(add);
            ArrObj.total = total;
            ArrObj.cantidad = add;
            console.log(itemObj);
            setCarts(carts);
            SetLocalStorage(carts);
            
            
        } else{
            
            setCarts([...carts, itemObj]);
            
        }
        
        totalCart([...carts, itemObj]);
        
              
    }
    function deleteItemCart(id) {
        var ArrayToDelete = carts.find(el => el.id == id);
        console.log(ArrayToDelete);
        var i = carts.indexOf(ArrayToDelete);
        console.log(i);
        carts.splice(i, 1);
        totalCart([...carts]);
    }
    function SetLocalStorage(carts) {
        localStorage.setItem("cart", JSON.stringify(carts));
        console.log(carts);
    }
    function totalCart(carts) {
        
        let suma=0;
        let totalItems=0;
        console.log(carts.lenght);
        for(let i in carts){
    
            suma += carts[i].total;
            console.log(i+" cantidad "+carts[i].cantidad);
            totalItems+= carts[i].cantidad;
            
          }
          setTotalItem(totalItems);
            settotalGlobal(suma);
            console.log(totalItems);
          
          console.log(suma);
          
          
    }
    return (
        <MainContext.Provider
            value={{
                addCart,
                totalItem,
                addToWCart,
                sendCart,
                clicks,
                carts,
                deleteItemCart,
                totalGlobal,                
            }} >
            {children}
        </MainContext.Provider>
    )
}

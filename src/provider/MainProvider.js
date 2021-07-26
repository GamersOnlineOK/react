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
    const [totalGlobal, settotalGlobal] = useState(0);
    const [totalItem, setTotalItem] = useState(0);


    function addToWCart() {
        setAddCart(prevAddCart => prevAddCart + 1)
    }
    function sendCart(itemObj) {
        var clicks = itemObj.cantidad;
        $("#messege").empty();
        $("#messege").append(`<h6 className="p-3">${clicks} x  agregado al Carrito</h6>`).fadeIn(500).delay(800).fadeOut(800);

        Swal.fire({
            position: 'center-center',
            icon: 'success',
            title: 'Agregado al carrito ',
            showConfirmButton: false,
            timer: 1500
        })
        var ArrObj = carts.find(el => el.id == itemObj.id);
        if (ArrObj) {
            let add = (ArrObj.cantidad) + (itemObj.cantidad);
            let total = (add) * (ArrObj.price);
            ArrObj.total = total;
            ArrObj.cantidad = add;
            setCarts(carts);
            SetLocalStorage(carts);
            totalCart([...carts]);


        } else {

            setCarts([...carts, itemObj]);
            totalCart([...carts, itemObj]);
        }

        


    }
    function deleteItemCart(id) {
        var ArrayToDelete = carts.find(el => el.id == id);
        var i = carts.indexOf(ArrayToDelete);
        carts.splice(i, 1);
        totalCart([...carts]);
    }
    function SetLocalStorage(carts) {
        localStorage.setItem("cart", JSON.stringify(carts));
        console.log(carts);
    }
    function totalCart(carts) {

      
        
        
        const suma=carts.reduce((acc, i) => (acc += i.total), 0);
        const totalItems=carts.reduce((acc,i)=>(acc+= i.cantidad),0);

        setTotalItem(totalItems);
        settotalGlobal(suma);
        


    }
    function cartinitialState(e){
        settotalGlobal(0);
        setTotalItem(0);
        setCarts([]);
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
                cartinitialState,
            }} >
            {children}
        </MainContext.Provider>
    )
}

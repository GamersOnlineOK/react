import React, {useContext, useState, createContext} from 'react'
import $ from 'jquery';
import useAddStock from '../component/js/main';
const MainContext = createContext()
//Costume hook 
export function useMainConsume(){
    return useContext(MainContext)
}
export function MainProvider({children}) {
    const[addCart,setAddCart]=useState(1);
    const [carts, setCarts] =useState([]);
    const{clicks}=useAddStock();
    function addToWCart(){
        setAddCart(prevAddCart => prevAddCart+1)
    }
    function sendCart(itemObj) {
        const clicks=itemObj.cantidad;
        $("#messege").empty();
        $("#messege").append(`<h6 class="p-3">${clicks} x  agregado al Carrito</h6>`).fadeIn(500).delay(800).fadeOut(800);
        console.log(itemObj.id);
        var ArrObj = carts.find(el => el.id==itemObj.id);
        if (ArrObj) {
            console.log(ArrObj.id);
            console.log("Cantidad"+ArrObj.id);
            const add=(ArrObj.cantidad)+(itemObj.cantidad);
            ArrObj.cantidad=add;
        setCarts([...carts,itemObj])
        SetLocalStorage(carts)
        }else{
            setCarts([...carts,itemObj])
        }
    }
    function deleteItemCart(id){
        var ArrayToDelete = carts.find(el => el.id==id);
        console.log(ArrayToDelete);
        var i=carts.indexOf(ArrayToDelete);
        console.log(i);
        carts.splice(i,1);
    }
    function SetLocalStorage(carts){
        localStorage.setItem("cart", JSON.stringify(carts));
        console.log(carts);
    }
    return (
       <MainContext.Provider
        value={{addCart,
        addToWCart,
        sendCart,
        clicks,
        carts,
        deleteItemCart}} >
           {children}           
       </MainContext.Provider>
    )
}
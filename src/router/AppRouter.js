import React from 'react';
import Menu from '../component/menu';
import ItemListContainer from '../component/itemListContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UserName from '../component/UserName';
import Checkout from '../pages/Checkout';
import itemDetailContainer from '../component/itemDetailContainer';
import ItemListCategoryContainer from '../component/ItemListCategoryContainer';
import Cart from '../component/Cart';
import { MainProvider } from '../provider/MainProvider';

function AppRouter() {
    return (
        <MainProvider>
        <Router>
            <Menu nickName="PARATUCASASHOP"/>
            <Switch  >
                <Route exact path="/" component={ItemListContainer}/>               
                
                <Route path="/Carrito" component={Cart}/>
                <Route path="/checkout" component={Checkout}/>
                <Route exact path="/productos/detail/:productDetail" component={itemDetailContainer}/>
                <Route exact path="/productos/:UserName" component={UserName}/>
                <Route exact path="/productos/categoria/:UserCategory" component={ItemListCategoryContainer}/>
                
            </Switch>
        </Router>
        </MainProvider>
    );
}

export default AppRouter;
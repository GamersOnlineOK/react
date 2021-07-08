import React from 'react';
import about from '../pages/about';
import PanelAdmin from '../pages/PanelAdmin';
import Menu from '../component/menu';
import ItemListContainer from '../component/itemListContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UserName from '../component/UserName';
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
                <Route path="/about" component={about}/>
                <Route path="/Panel-Admin" component={PanelAdmin}/>
                <Route path="/Carrito" component={Cart}/>
            
                <Route exact path="/productos/detail/:productDetail" component={itemDetailContainer}/>
                <Route exact path="/productos/:UserName" component={UserName}/>
                <Route exact path="/productos/categoria/:UserCategory" component={ItemListCategoryContainer}/>
                
            </Switch>
        </Router>
        </MainProvider>
    );
}

export default AppRouter;
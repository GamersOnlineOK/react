import React from 'react';
import about from '../pages/about';
import home from '../pages/home';
import Menu from '../component/menu';
import ItemListContainer from '../component/itemListContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import UserName from '../component/UserName';

function AppRouter(props) {
    return (
        <Router>
            <Menu/>
            <Switch>
                <Route exact path="/" component={home}/>
                <Route path="/about" component={about}/>
                <Route path="/products" component={ItemListContainer}/>
                <Route exact path="/productos/:UserName" component={UserName}/>
                
            </Switch>
        </Router>
    );
}

export default AppRouter;
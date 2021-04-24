import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import ListProducts from "./pages/ListProducts/ListProducts";
import DetailProduct from "./pages/DetailProduct/DetailProduct";

const App =()=> {
    return(
        <Switch>
            <Route exact path="/">
                <ListProducts/>
            </Route>
            <Route path="/product/:id">
                <DetailProduct/>
            </Route>

        </Switch>
    )
}

export default App;

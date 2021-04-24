import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import ListProducts from "./pages/ListProducts/ListProducts";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import NoMatch from "./pages/NoMatch/NoMatch";

const App =()=> {
    return(
        <Switch>
            <Route exact path="/">
                <ListProducts/>
            </Route>
            <Route path="/product/:id">
                <DetailProduct/>
            </Route>
            <Route path="*">
                <NoMatch/>
            </Route>

        </Switch>
    )
}

export default App;

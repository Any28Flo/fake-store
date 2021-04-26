import React from 'react';
import {Switch, Route} from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';

import ListProducts from "./pages/ListProducts/ListProducts";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import NoMatch from "./pages/NoMatch/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register/Register";

import {Layout} from "antd";

const {Content} = Layout;
const App = () => {
    return (
        <Layout>
            <Navbar/>

            <Content style={{padding: '0 50px'}}>
                <Switch>
                    <Route exact path="/">
                        <ListProducts/>
                    </Route>
                    <Route path="/product/:id">
                        <DetailProduct/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>
                    <Route path="*">
                        <NoMatch/>
                    </Route>

                </Switch>
            </Content>

        </Layout>
    )
}

export default App;

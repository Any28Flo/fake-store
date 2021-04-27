import React, {useEffect} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Layout} from "antd";

//styles
import 'antd/dist/antd.css';
import './App.css';
//components
import ListProducts from "./pages/ListProducts/ListProducts";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import NoMatch from "./pages/NoMatch/NoMatch";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register/Register";
import LogIn from "./pages/LogIn/LogIn";
//services
import {getFavs} from "./services/user/userService";
//variables
import {RESET_FAVS, SET_FAVS} from "./types/index";
//context
import {useStateValue} from "./context/StateProvider";

const {Content} = Layout;
const App = () => {
    const [{ jwt}, dispatch] = useStateValue();



    const listaFavs = async (jwt)=> {
        if(!jwt){
            dispatch({
                type: RESET_FAVS
            })
        }
        await getFavs(jwt)
            .then(listFavs =>{
                dispatch({
                    type: SET_FAVS,
                    favs: listFavs.favs
                })
            } )

    }
    useEffect(()=>{
        listaFavs(jwt)

    }, [dispatch])
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
                    <Route path="/login">
                        <LogIn/>
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

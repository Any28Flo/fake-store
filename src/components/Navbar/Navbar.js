import React from 'react';
import {Menu, Layout} from 'antd';
import {Link, useHistory} from 'react-router-dom';
import FakeApiLogo from './../../media/images/fake-store-logo.png'
import {useStateValue} from "../../context/StateProvider";
import {SET_USER} from "../../types/index"
const {Header} = Layout;

const Navbar = () => {
    const [ {  user, token}, dispatch] = useStateValue();
    const history = useHistory();
    const handleLogOut = ()=>{
        dispatch({
            type: SET_USER,
            user: null,
            token: null

        })
        window.sessionStorage.removeItem('jwt')
        history.push('/');
    }
    return (
        <Header>
            <Menu mode="horizontal">

                <Menu.Item key="2">
                    <Link to="/">
                        <img src={FakeApiLogo} alt="" style={{width: '4em'}}/>
                    </Link>
                </Menu.Item>
                {
                    token ?
                        <Menu.Item style={{float: 'right'}} onClick={handleLogOut}>
                            <Link to="/">
                                Log out
                            </Link>
                        </Menu.Item>
                        :
                        <Menu.Item style={{float: 'right'}}>
                            <Link to='/login'>
                                Log in
                            </Link>
                        </Menu.Item>
                }
            </Menu>
        </Header>
    );
}

export default Navbar;
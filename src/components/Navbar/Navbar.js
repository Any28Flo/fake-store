import React from 'react';
import {Menu, Layout} from 'antd';
import {Link} from 'react-router-dom';
import FakeApiLogo from './../../media/images/fake-store-logo.png'

const {Header} = Layout;
const Navbar = () => {

    const isLogged = false;
    return (
        <Header>
            <Menu mode="horizontal">

                <Menu.Item key="2">
                    <Link to="/">
                        <img src={FakeApiLogo} alt="" style={{width: '4em'}}/>
                    </Link>
                </Menu.Item>
                {
                    isLogged ?
                        <Menu.Item style={{float: 'right'}}>
                            <Link to="/">
                                Log out
                            </Link>
                        </Menu.Item>
                        :
                        <Menu.Item style={{float: 'right'}}>
                            <Link to='/register'>
                                Log in
                            </Link>
                        </Menu.Item>
                }
            </Menu>
        </Header>
    );
}

export default Navbar;
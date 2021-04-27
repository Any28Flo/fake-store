import React from 'react';
import {Form, Input, Button, Row, Col} from 'antd';
import {useHistory, Link} from 'react-router-dom'
import {logInUser} from "../../services/user/userService";
import {useStateValue} from "../../context/StateProvider";
import {SET_USER} from "../../types/index";

const LogIn = () => {
    const [{user}, dispatch] = useStateValue();
    const history = useHistory();

    const handleSubmit = async (values) => {
        const json = await logInUser(values)
        if (json) {
            dispatch({
                type: SET_USER,
                user: json.user,
                token: json.token
            })
            window.sessionStorage.setItem('jwt', json.token)
            history.push("/")
        }
        //TODO : handle error

    };

    return (
        <section>
            <Row>
                <Col lg={12}>
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={handleSubmit}
                    >

                        <Form.Item
                            name={'email'}
                            label="Email"
                            rules={[
                                {type: 'email'},
                                {
                                    required: true,
                                    message: 'Please input your email',
                                }

                            ]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <p>Don't have an account <Link to="/register">register</Link></p>
                </Col>
            </Row>
        </section>

    );
}

export default LogIn;
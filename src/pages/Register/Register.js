import React from 'react';
import { Form, Input, Button, Row,Col} from 'antd';
import { useHistory } from 'react-router-dom'
import registerUser from "../../services/user/userService";
import {useStateValue} from "../../context/StateProvider";
import {SET_USER} from "../../types/index";

const Register = () => {
    const [ dispatch] = useStateValue();
    const history = useHistory;


    const handleSubmit= (values) => {
        registerUser(values)
            .then(json =>{
                dispatch({
                    type: SET_USER,
                    user: json
                })
                history.push('/')
            })
            .catch(e =>{
                //TODO : handle error

            })
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
                            name={ 'email'}
                            label="Email"
                            rules={[
                                { type: 'email' },
                                {
                                    required: true,
                                    message: 'Please input your email',
                                }

                            ]}>
                            <Input />
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
                            <Input.Password />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </section>

    );
}

export default Register;
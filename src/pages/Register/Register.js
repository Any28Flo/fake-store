import React from 'react';
import { Form, Input, Button, Checkbox, Row,Col} from 'antd';

const Register = (props) => {
    const registerUser = (values) =>{
        console.log(values)
    }
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
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
                        onFinish={registerUser}
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
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
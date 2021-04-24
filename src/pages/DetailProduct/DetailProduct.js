import React from 'react';
import {Layout, Col, Row} from "antd";

import {Content} from '../ListProducts/ListProducts';

const DetailProduct = () => {
    return (
        <Layout>
            <Content style={{padding: '0 50px'}}>
                <Col>
                    <Row>
                        <h2>Product detail</h2>
                    </Row>
                </Col>
            </Content>
        </Layout>
    );
}

export default DetailProduct;
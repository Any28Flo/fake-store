import React , {useState,useEffect} from 'react';

import {Card, Col, Layout, Row} from "antd";

import getProducts from "../../services/getProducts";


export const {  Content} = Layout;
const { Meta } = Card;

const ListProducts = () =>{

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
            .then(json => setProducts(json))

    }, [])

    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Row gutter={16}>
                    {
                        products.map(product =>{
                            console.log(product)
                            return(
                                <Col  lg={6}>
                                    <Card
                                        key={product.id}
                                        hoverable
                                        className="card-product"
                                        cover={<img alt="example" src={product.image} className="card-img" />}
                                    >
                                        <Meta title={product.title} description={product.description} />
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Content>

        </Layout>

    );
}

export default ListProducts;
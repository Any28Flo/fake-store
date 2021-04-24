import React , {useState,useEffect} from 'react';

import {Card, Col, Layout, Row} from "antd";
import {Link} from "react-router-dom";

import getProducts from "../../services/getProducts";

import {useStateValue} from "../../context/StateProvider";

import { SET_PRODUCTS} from "./../../types";
export const {  Content} = Layout;
const { Meta } = Card;

const ListProducts = () =>{
    const [{ products, user }, dispatch] = useStateValue();
    console.log(products)
    console.log(user)

    useEffect(()=>{
        getProducts()
            .then(json =>{
               dispatch({
                   type: SET_PRODUCTS,
                   products: json
               })
            } )

    }, [])

    return (
        <Layout>
            <Content style={{ padding: '0 50px' }}>
                <Row gutter={16}>
                    {
                        products?.map(product =>{
                            console.log(product)
                            return(
                                <Col  lg={6}> `
                                    <Link to={`/product/${product.id}` }  key={product.id}>
                                        <Card
                                            hoverable
                                            className="card-product"
                                            cover={<img alt="example" src={product.image} className="card-img" />}
                                        >
                                            <Meta title={product.title} description={product.description} />
                                        </Card>
                                    </Link>
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
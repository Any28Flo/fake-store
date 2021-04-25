import React , {useEffect} from 'react';

import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";

import getProducts from "../../services/getProducts";

import {useStateValue} from "../../context/StateProvider";

import { SET_PRODUCTS} from "./../../types";

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

                <Row gutter={16}>
                    {
                        products?.map(product =>{
                            console.log(product)
                            return(
                                <Col  lg={6}>
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


    );
}

export default ListProducts;
import React from 'react';
import {Col, Row} from "antd";
import {useParams} from 'react-router-dom';
import {useStateValue} from "../../context/StateProvider";

const DetailProduct = () => {
    let {id} = useParams();
    const [{products}] = useStateValue();

    const product = products.find(product => product.id === parseInt(id))

    return (
        <Col>
            <Row>
                <Col lg={12}>
                    <img src={product?.image} alt="product" className="detail-img"/>
                </Col>
                <Col lg={12}>
                    <h2>{product?.title}</h2>
                    <p>Price : {product?.price} </p>
                    <p>{product?.description}</p>
                </Col>
            </Row>
        </Col>

    );
}

export default DetailProduct;
import React , {useEffect} from 'react';

import {Card, Col, Row} from "antd";
import {Link, useHistory} from "react-router-dom";
import { HeartOutlined} from '@ant-design/icons';

import ButtonFav from "../../components/ButtonFav/ButtonFav";

import getProducts from "../../services/getProducts";
import {addFav} from "../../services/user/userService";
import {useStateValue} from "../../context/StateProvider";

import {
    SET_PRODUCTS ,
    ADD_FAV
        } from "./../../types";

const { Meta } = Card;

const ListProducts = () =>{

    const [{ products, token,favs }, dispatch] = useStateValue();




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
                            return(
                                <Col lg={6} key={product.id}>
                                        <Card
                                            hoverable
                                            className="card-product"
                                            cover={<img alt="example" src={product.image} className="card-img" />}
                                            actions={[
                                                <ButtonFav id={product.id}/>,
                                                <Link to={`/product/${product.id}` }  >
                                                    <p >Ver más</p>,
                                                </Link>
                                            ]}
                                        >
                                            <Meta title={product.title} description={product.description} />
                                        </Card>
                                </Col>
                            )
                        })
                    }
                </Row>


    );
}

export default ListProducts;
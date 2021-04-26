import React , {useEffect} from 'react';

import {Card, Col, Row} from "antd";
import {Link, useHistory} from "react-router-dom";
import { HeartOutlined} from '@ant-design/icons';

import getProducts from "../../services/getProducts";

import {useStateValue} from "../../context/StateProvider";

import { SET_PRODUCTS} from "./../../types";

const { Meta } = Card;

const ListProducts = () =>{

    const [{user, products }, dispatch] = useStateValue();

    const history = useHistory();
    const handleFav=(idProduct)=>{
        console.log(idProduct)
        if(!user) return history.push('/register')
        console.log('add to fav')
        console.log(user)
    }
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
                                                <HeartOutlined key="setting"  onClick={()=>handleFav(product.id)} />,
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
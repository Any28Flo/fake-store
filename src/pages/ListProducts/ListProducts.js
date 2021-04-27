import React , {useEffect} from 'react';
import {Card, Col, Row} from "antd";
import {Link} from "react-router-dom";
//components
import ButtonFav from "../../components/ButtonFav/ButtonFav";
//services
import getProducts from "../../services/getProducts";
//context
import {useStateValue} from "../../context/StateProvider";
//variables
import {SET_PRODUCTS} from "./../../types";

const { Meta } = Card;

const ListProducts = () =>{

    const [{ products,jwt }, dispatch] = useStateValue();



    useEffect(()=>{
        getProducts()
            .then(json =>{
               dispatch({
                   type: SET_PRODUCTS,
                   products: json
               })
            } )
    }, [jwt])

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
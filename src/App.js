import React, {useState,useEffect} from 'react';
import { Layout, Row, Col, Card } from 'antd';
import 'antd/dist/antd.css';
import './App.css';

const {  Content} = Layout;
const { Meta } = Card;

const App =()=> {
  //  const URL =
  const [products, setProducts] = useState([]);


  useEffect(()=>{
      fetch('https://fakestoreapi.com/products?limit=5')
          .then(res=>res.json())
          .then(json=>{
                 setProducts(json)
          })
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

export default App;
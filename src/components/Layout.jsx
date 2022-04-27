import React from "react";
import { Layout, Row, Col } from "antd";
import { Link } from "react-router-dom";

const Body = ({ Products }) => {
  const { Sider, Content } = Layout;
  return (
    <div>
      <Layout>
        <Sider></Sider>
        <Content>
          <Row>
            {Products?.map((info) => (
              <Col span={12}>
                <Link to={`/Category/${info.id}`}>
                 <div className="product-info">
                  <div className="product-image">
                    <img src={info.image} alt="product_image" />
                  </div>
                  <p>Name - {info.title}</p>
                  <p>Price - ${info.price}</p>
                  <p>Description - {info.description}</p>
                </div>
                </Link>
               
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default Body;

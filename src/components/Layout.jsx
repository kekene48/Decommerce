import React, { useState } from "react";
import { Layout, Card, Rate, Radio, Space, InputNumber } from "antd";
import { Link } from "react-router-dom";

const Body = ({ Products }) => {
  const { Sider, Content } = Layout;
  const [rating, setRating] = useState(1);
  return (
    <div>
      <Layout>
        <Sider width="340px" theme="light" style={{ padding: "25px" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h2>Customer Reviews</h2>
            <Radio.Group
              value={rating}
              onChange={(value) => setRating(value.target.value)}
            >
              <Space direction="vertical">
                <Radio value={5}>
                  <Rate defaultValue={5} disabled={true}></Rate>
                </Radio>
                <Radio value={4}>
                  <Rate defaultValue={4} disabled={true}></Rate>
                </Radio>
                <Radio value={3}>
                  <Rate defaultValue={3} disabled={true}></Rate>
                </Radio>
                <Radio value={2}>
                  <Rate defaultValue={2} disabled={true}></Rate>
                </Radio>
                <Radio value={1}>
                  <Rate defaultValue={1} disabled={true}></Rate>
                </Radio>
              </Space>
            </Radio.Group>
            <br />
            <br />
            <h2>Price Ranges</h2>
            <p className="prices">Under $5</p>
            <p className="prices">$5 to $10</p>
            <p className="prices">$10 to $20</p>
            <p className="prices">$20 & Above</p>
            <Space>
              <InputNumber
                value={""}
                formatter={(value) => `$ ${value}`}
                onChange={""}
              />
              <InputNumber
                value={""}
                formatter={(value) => `$ ${value}`}
                onChange={""}
              />
            </Space>
            <br />
            <br />
          </div>
        </Sider>
        <Content>
          {Products?.map((info) => (
            <Link to={`/category/product/${info.id}`}>
              <Card>
                <div className="product-info" style={{display: 'flex'}}>
                  <div className="product-image">
                    <img src={info.image} alt="product_image" width='300px' height='300px' />
                  </div>
                  <div style={{marginLeft : '20px'}}>
                    <p>Name - {info.title}</p>
                    <Rate disabled defaultValue={info.rating.rate} />
                    <p>Price - ${info.price}</p>
                    <p>Description - {info.description}</p>
                  </div>
                  
                </div>
              </Card>
            </Link>
          ))}
        </Content>
      </Layout>
    </div>
  );
};

export default Body;

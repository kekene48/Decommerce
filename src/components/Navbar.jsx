import React, { useState } from "react";
import { PageHeader, Button, Badge, Space, Input } from "antd";
import { ShoppingCartOutlined, MenuOutlined } from "@ant-design/icons";
import './Navbar.css'

const Navbar = () => {

  const {categoryName, setCategoryName} = useState([]);
  return (
    <div className="site-page-header-ghost-wrapper">
      <PageHeader
        ghost={false}
        className="site-page-header-responsive"
        title="De-Commerce"
        extra={[
          <>
            <Input
              placeholder="Find A Product"
              enterButton
              className="InputBar"
            />
            <Button className="login" key="1" type="primary">
              login
              {/* {account ? (
              <span>{account.slice(0, 5)}...</span>
            ) : (
              <span>login</span>
            )} */}
            </Button>
            <Space size={"large"}>
              <Badge count={0} showZero>
                <span className="header-buttons">
                  <ShoppingCartOutlined className="header-icon" />
                  Cart
                </span>
              </Badge>
            </Space>
          </>,
        ]}
      ></PageHeader>
      <div className="site-page-subheader-ghost-wrapper">
      
        <Space size={"middle"}>
          <Space size={"small"} style={{ fontWeight: "bold" }}>
            <MenuOutlined />
            Categories
          </Space>
        </Space>
      </div>
    </div>
  );
};

export default Navbar;

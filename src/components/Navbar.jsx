import React, { useState, useEffect } from "react";
import { Typography, Input, Button, TabList, Tab } from "web3uikit";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [Category, setCategory] = useState([]);
  const [showcategory, setshowcategory] = useState(false);
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "amazon24.p.rapidapi.com",
      "X-RapidAPI-Key": "17e712b866msha4350da47daf0eep1dc4f6jsn47dd7ddc2041",
    },
  };
  const getCategory = async () => {
    const response = await fetch(
      "https://amazon24.p.rapidapi.com/api/category?country=US",
      options
    );
    const data = await response.json();
    console.log(data);
    setCategory(data);
  };
  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const categoryArray = [
    Category[7]?.name,
    Category[9]?.name,
    Category[12]?.name,

    Category[13]?.name,
    Category[15]?.name,

    Category[16]?.name,

    Category[47]?.name,
    Category[52]?.name,
  ];
  console.log(categoryArray);
  return (
    <div>
      <div className="Navbar">
        <Typography variant="h3">Headline 3</Typography>
        <Input
          label="Search"
          name="Search Input"
          onChange={function noRefCheck() {}}
          size="regular"
          prefixIcon="search"
          iconPosition="end"
        />
        <Button type="button" text="connect Wallet" />
        <div>
          <CgProfile size={"30px"} />
        </div>
      </div>
      <div className="category">
        <div className="sub-category">
          <Typography
            variant="subtitle2"
            style={{ onhover: "pointer" }}
            onClick={setshowcategory(true)}
          >
            Categories
          </Typography>
        </div>
        {showcategory && (
          <TabList defaultActiveKey={1} tabStyle="bar">
          {categoryArray?.map((item, i) =>(
            <Tab tabKey={i} tabName={item}></Tab>
          ))}
        </TabList>
        )}
      </div>
    </div>
  );
};

export default Navbar;

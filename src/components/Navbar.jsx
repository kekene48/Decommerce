import React, { useState } from "react";
import { Typography, Input, Button } from "web3uikit";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { useApiContext } from "../utils/ApiCode";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { Category } = useApiContext();

  const [showcategory, setshowcategory] = useState(false);

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
            onClick={() =>
              showcategory ? setshowcategory(false) : setshowcategory(true)
            }
          >
            Categories
          </Typography>
        </div>
        {showcategory && (
           <div className="showcategory">
           {Category.map((item) => (
          <Link to={`/category/${item}`} key={item} className="links">
            {item}{" "}
          </Link>
        ))}
        </div>
        )}
       
       
      </div>
    </div>
  );
};

export default Navbar;

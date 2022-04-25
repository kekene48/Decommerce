import React from "react";
import Navbar from "./Navbar";
import Footers from "./Footer";
import {  Space } from "antd";

const Home = () => {
 
  return (
    <div>
      <Navbar/>
     <footer>
       <Footers/>
     </footer>
    </div>
  );
};

export default Home;

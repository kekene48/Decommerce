import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useApiContext } from "../utils/ApiCode";
import Footers from "./Footer";
import { Rate } from "antd";
import Navbar from "./Navbar";
import "./product.css";

const Product = () => {
  const { id } = useParams();
  console.log(id);
  const { productData, productid } = useApiContext();

  useEffect(() => {
    productData(id);
  }, [id]);

  return (
    <div>
      <Navbar />
      <div>
        <div className="product">
          <div>
            <img
              className="product-image"
              src={productid?.image}
              alt={productid?.title}
              height="400px"
              weight="400px"
            />
          </div>
          <div className="product-details">
            <h2>{productid?.title}</h2>
            <Rate disabled defaultValue={productid?.rating.rate} />
            <p style={{ marginTop: "15px" }}>
              {" "}
              Price:
              <span style={{ color: "green" }}>${productid?.price}</span>
            </p>
            <hr></hr>
            {productid?.rating.count > 0 ? <h4 style={{color: 'blue'}}>In Stock</h4> : <h4 style={{color: 'red'}}>Out of Stock</h4>}
            <button style={{backgroundColor : 'orange', border: 'none', color: 'white'}} onClick={() => {--productid.rate.count}}>Add To Cart +</button>
            <hr></hr>

            <h3>Product Description</h3>
            <p>{productid?.description}</p>
          </div>
        </div>
        <footer>
          <Footers />
        </footer>
      </div>
    </div>
  );
};

export default Product;

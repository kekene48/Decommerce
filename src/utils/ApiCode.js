import React, { createContext, useContext, useState, useEffect } from "react";

const ApiContext = createContext();

const baseUrl = "https://fakestoreapi.com/products/category/";

export const ApiCode = ({ children }) => {
  const [Category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [Products, setProducts] = useState();
   const [productid, setProductid] = useState();

  useEffect(() => {
    getCategory();
    
  }, [Products]);

  const getCategory = async () => {
    setIsLoading(true)
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
    console.log(data);
    setCategory(data);
    setIsLoading(false);
  };

  const getProducts = async (pathname) => {
    const response = await fetch(
      `https://fakestoreapi.com/products${pathname}`
    );
    const data = await response.json();
    console.log(data);
    setProducts(data);
  };
  const productData = async (id) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${id}`
    );
    const data = await response.json();
    console.log(data);
    setProductid(data);
  };

  return (
    <ApiContext.Provider value={{ Category, getCategory, Products, getProducts, productData, productid }}>
      {children}
    </ApiContext.Provider>
  );
};
export const useApiContext = () => useContext(ApiContext);

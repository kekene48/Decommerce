import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { useApiContext } from '../utils/ApiCode';
import Body from './Layout';
import Navbar from './Navbar';

const Categories = () => {
 const  product  = useLocation();

 const { Products, getProducts } = useApiContext();
 console.log(product);
 
 useEffect(() => {
   getProducts(product.pathname);
 }, [product.pathname]);

 return (
   <div>
     <Navbar/>
     <Body Products={Products} />
   </div>

 );  

}

export default Categories
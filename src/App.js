
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Product from './components/Product';



const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/category/product/:id" element={<Product />} />
    <Route path="/category/:product" element={<Categories />} />
  </Routes>
);
export default App;

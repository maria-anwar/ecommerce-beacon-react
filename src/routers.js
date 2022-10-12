import React from "react";
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Search from './components/Search';
import ProductCard from './components/ProductCard';
import Home from './views/Home';
import Product from './views/Product';
import Blogs from './views/Blogs';
import AboutUs from './views/AboutUs';
import ContactUs from './views/ContactUs';
import SignUp from './views/SignUp';
import Login from './views/Login';
import Cart from './views/Cart';
import MiniCart from './views/MiniCart';
import MenCategory from './views/MenCategory';
import Item from "./components/Item";

import SingleProduct from './components/SingleProduct';

const AppRouter = ()=>{
    return(
        <BrowserRouter>

  <div className="App">
    {/* parent layout and children */}
  <Routes>

    {/* Parent route */}
    <Route path="/" element={<Layout />} >

      {/* children routes */}
      <Route index element={<Home />} />
      <Route path="/Product" element={<Product/>} />
      <Route path="/Blogs" element={<Blogs/>} />
      <Route path="/AboutUs" element={<AboutUs/>} />
      <Route path="/ContactUs" element={<ContactUs/>} />
       <Route path="/Cart" element={<Cart/>} /> 
      <Route path="/MiniCart" element={<MiniCart/>} />
      <Route path="/ProductCard" element={<ProductCard/>} />
      <Route path="/Item" element={<Item/>} />
      <Route path="/Category/:category" element={<MenCategory/>} />
      {/* <Route path="/WomenCategory" element={<WomenCategory/>} /> */}
      <Route path="/Search" element={<Search/>} />
            <Route path="/Product/:id" element={<Product/>} />
      {/* <Route path="/SingleProduct" element={<SingleProduct/>} /> */}
      <Route path="/Cart/:id" element={<Cart/>} />
    </Route>

    {/* Simple routes without parent layout */}
    <Route path="/SignUp" element={<SignUp/>} />
    <Route path="/Login" element={<Login/>} />
    
    <Route 
      path="*"
      element={
          <main style={{ padding: "1rem" }}>
            <h1>There's nothing here!</h1>
          </main>
        } 
        />    
  </Routes>
      
    </div>  
  </BrowserRouter>
    );
}
export default AppRouter;
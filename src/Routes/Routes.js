import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Blog from '../Pages/Blog';
import Login from '../Pages/Login';
import Cart from '../Pages/Cart';
import Register from '../Pages/Register';
import BlogDetails from '../Pages/BlogDetails';
import Contact from '../Pages/Contact';
import NoFound from '../Pages/NoFound';
import ProductDMain from '../Pages/ShopDetailes';
import Shop from '../Pages/Shop';
import FAq from '../Pages/FAQ';
import Products from '../Pages/Products';
import PrivetRoutes from './PrivetRoutes';
import ShopList from '../Pages/ShopList';

export const RoutesRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/blog" element={<Blog />}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/blog/:id" element={<BlogDetails></BlogDetails>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route
        path="/cart"
        element={
          <PrivetRoutes>
            <Cart></Cart>
          </PrivetRoutes>
        }
      ></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route
        path="/product/:id"
        element={<ProductDMain></ProductDMain>}
      ></Route>
      <Route path="/product" element={<Products></Products>}></Route>
      <Route path="/shop" element={<Shop></Shop>}></Route>
      <Route path="*" element={<NoFound></NoFound>}></Route>
      <Route path="/faq" element={<FAq></FAq>}></Route>

      <Route path="/shopList" element={<ShopList></ShopList>}></Route>
    </Routes>
  );
};

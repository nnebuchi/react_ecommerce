import logo from './logo.svg';
import './App.css';
import Topbar from './components/includes/Topbar';
import Navbar from './components/includes/Navbar';
import Home from './components/pages/Home';
import { Routes, Route } from "react-router-dom";
import About from './components/pages/About';
import Cookies from 'universal-cookie';
import { useEffect, useState } from 'react';
import { products } from './utils/database';
// import Navs from './components/pages/Navs';

function PageContainer() {
  const [cart, setCart] = useState([]);

  // const [items, setItems] = useState([]);
  useEffect(()=>{
    setCookies('cart', cart);
    // for api fetch option
    // setItems()
  }, [])

  function setCookies(name,value){
    const cookies = new Cookies();
    cookies.set(name, value, { path: '/' });
    setCart(cookies.get('cart'))
    return cookies
  }
  //  for api fetch option
  // function setItems(){
  //   const getitems = await fetch("bla bla bla");
  //   const feedback = getitems.json();
  //   setItems(feedback)
  //   return feedback
  // }

  // function getCookiesByName(name){
  //   const cookies = new Cookies();
  //   return cookies.get(name)
  // }

  const  addToCart =   function addToCart(event){
   
    
    const productindex =   event.target.getAttribute('productindex');
    
    const targetProduct =  products()[productindex];
    
    // for api fetch option
    // const targetProduct =  items[productindex];
   
    const productInfo = {
      productId: targetProduct.id,
      quantity:1,
      productDetail:targetProduct
    }
    cart.push(productInfo)
    
    setCookies('cart', cart);
    // alert(cart.length)
    console.log(cart)
    return;
  }
  return (
    
    <>
       <Routes>
          <Route path="/" element={<Home addToCart={addToCart} cart={cart}/>} />
          <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default PageContainer;

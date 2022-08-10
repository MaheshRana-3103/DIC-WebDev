import React from 'react'
import {Route,Switch}from "react-router-dom"
import Products from './Products'
import Cart from './Cart'
import Banner from "./Banner";
import Stats from "./Stats";
import Blog from './Blog';
import Team from './Team/Team';
import Signup from './Signup';
import Footer from './Footer';
const Routes = ({productitems,cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {
  
  return (
    <div>
      <Switch>
         <Route path="/" exact>
          <Banner/>
          <Stats/>
          <Products productitems= {productitems}  handleAddProduct={handleAddProduct}/>
          <Blog/>
          <Team/>
          <Footer/>
         </Route>
         <Route path="/signup" exact>
           <Signup></Signup>
         </Route>
         <Route path="/cart" exact>
            <Cart cartItems={cartItems} 
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
            />
        </Route>
      </Switch>
    </div>
  )
}

export default Routes

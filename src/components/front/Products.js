import React, { useState } from 'react'
import "./Products.css";
import data from '../back/data';
const Products = ({productitems,handleAddProduct}) => {
    const [filter,setfilter]=useState('');
    
    const searchtext =(event)=>{
        setfilter(event.target.value);
    }
    let datasearch=productitems.filter(item=>{
        return Object.keys(item).some(key=>
            item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
            )
    });
    return (
    <>
    <div className="search">
       <h2>
       <i class="fa fa-search" aria-hidden="true"></i>
       </h2>
       <input className="search-input"type="text" name="text"value={filter}
       onChange={searchtext.bind(this)}
       placeholder="Find Your Product..."></input>
    </div>
    <div className="products">
        
        {datasearch.map((productitem)=>(
            <div className="card">
                <div className="product-image">
                    <img src={productitem.image}
                    alt={productitem.name}/>
                </div>
                <div className="product-name">
                   <h3>{productitem.name}</h3>
                </div>
                <div className="product-price">
                    ${productitem.price}
                </div>
                <div>
                    <button className="product-add-button"
                    onClick={()=> handleAddProduct(productitem)}>
                        Add to cart
                    </button>
                </div>
            </div>
            
        ))}
    </div>
    </>
  )
}

export default Products

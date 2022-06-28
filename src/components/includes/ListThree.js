import React from "react";
import { Link } from "react-router-dom";

export default function ListThree(props){
    const addToCart = props.addToCart;
    return(
        <div className="col-md-9 col-sm-8">
            <h2>Three items</h2>
            <div className="owl-carousel owl-carousel3">
                {props.top_three_products.map((product, index)=>(
                    <div key={index}>
                        
                            <div className="product-item">
                            <div className="pi-img-wrapper">
                                <img src={product.cover_photo} className="img-responsive" alt="Berry Lace Dress" />
                                <div>
                                <a href={product.cover_photo} className="btn btn-default fancybox-button">Zoom</a>
                                <a href={`#product-pop-up-${product.id}`} className="btn btn-default fancybox-fast-view">View</a>
                                </div>
                            </div>
                            <h3><a href="shop-item.html">{product.title}</a></h3>
                            <div className="pi-price">${product.discount_price}</div>
                            <button className="btn btn-default add2cart" productindex={index} onClick={addToCart}>Add to cart</button>
                            </div>
                    </div>
                ))}
                
               
            </div>
        </div>
    );
}
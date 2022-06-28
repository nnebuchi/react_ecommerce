import React from 'react';
import { Link } from "react-router-dom";


export default function Navbar(props){
  
	return(
			<>
				{/* <!-- BEGIN HEADER -->*/}
    <div className="header">
      <div className="container">
        <Link className="site-logo" to="/">
          <img src="assets/corporate/img/logos/logo-shop-red.png" alt="Metronic Shop UI" />
        </Link>

        <a href="#" className="mobi-toggler"><i className="fa fa-bars"></i></a>

        {/* <!-- BEGIN CART -->*/}
        <div className="top-cart-block">
          <div className="top-cart-info">
            <a href="#" className="top-cart-info-count">{props.cart.length} items</a>
            <a href="#" className="top-cart-info-value">$1260</a>
          </div>
          <i className="fa fa-shopping-cart"></i>
                        
          <div className="top-cart-content-wrapper">
            <div className="top-cart-content">
              <ul className="scroller" style={{height:"250px"}}>
                <li>
                  <a href="shop-item.html">
                  	<img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width="37" height="34" />
                  </a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="#" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width="37" height="34" /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="#" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width="37" height="34" /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="#" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width="37" height="34" /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="#" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width="37" height="34" /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="#" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width="37" height="34" /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="#" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width="37" height="34" /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="#" className="del-goods">&nbsp;</a>
                </li>
                <li>
                  <a href="shop-item.html"><img src="assets/pages/img/cart-img.jpg" alt="Rolex Classic Watch" width="37" height="34" /></a>
                  <span className="cart-content-count">x 1</span>
                  <strong><a href="shop-item.html">Rolex Classic Watch</a></strong>
                  <em>$1230</em>
                  <a href="#" className="del-goods">&nbsp;</a>
                </li>
              </ul>
              <div className="text-right">
                <a href="shop-shopping-cart.html" className="btn btn-default">View Cart</a>
                <a href="shop-checkout.html" className="btn btn-primary">Checkout</a>
              </div>
            </div>
          </div>            
        </div>
        {/* <!--END CART -->*/}

        {/* <!-- BEGIN NAVIGATION -->*/}
        <div className="header-navigation">
          <ul>
            <li className="dropdown">
              {/* <Link to="/" className="dropdown-toggle" data-toggle="dropdown" data-target="#">Woman</Link> */}
              <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                Woman 
                
              </a>
                
              {/* <!-- BEGIN DROPDOWN MENU -->*/}
              <ul className="dropdown-menu">
                <li className="dropdown-submenu">
                  <a href="shop-product-list.html">Hi Tops <i className="fa fa-angle-right"></i></a>
                  <ul className="dropdown-menu" role="menu">
                    <li><a href="shop-product-list.html">Second Level Link</a></li>
                    <li><a href="shop-product-list.html">Second Level Link</a></li>
                    <li className="dropdown-submenu">
                      <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                        Second Level Link 
                        <i className="fa fa-angle-right"></i>
                      </a>
                      <ul className="dropdown-menu">
                        <li><a href="shop-product-list.html">Third Level Link</a></li>
                        <li><a href="shop-product-list.html">Third Level Link</a></li>
                        <li><a href="shop-product-list.html">Third Level Link</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><a href="shop-product-list.html">Running Shoes</a></li>
                <li><a href="shop-product-list.html">Jackets and Coats</a></li>
              </ul>
              {/* <!-- END DROPDOWN MENU -->*/}
            </li>
            <li className="dropdown dropdown-megamenu">
              <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                Man
                
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="header-navigation-content">
                    <div className="row">
                      <div className="col-md-4 header-navigation-col">
                        <h4>Footwear</h4>
                        <ul>
                          <li><a href="shop-product-list.html">Astro Trainers</a></li>
                          <li><a href="shop-product-list.html">Basketball Shoes</a></li>
                          <li><a href="shop-product-list.html">Boots</a></li>
                          <li><a href="shop-product-list.html">Canvas Shoes</a></li>
                          <li><a href="shop-product-list.html">Football Boots</a></li>
                          <li><a href="shop-product-list.html">Golf Shoes</a></li>
                          <li><a href="shop-product-list.html">Hi Tops</a></li>
                          <li><a href="shop-product-list.html">Indoor and Court Trainers</a></li>
                        </ul>
                      </div>
                      <div className="col-md-4 header-navigation-col">
                        <h4>Clothing</h4>
                        <ul>
                          <li><a href="shop-product-list.html">Base Layer</a></li>
                          <li><a href="shop-product-list.html">Character</a></li>
                          <li><a href="shop-product-list.html">Chinos</a></li>
                          <li><a href="shop-product-list.html">Combats</a></li>
                          <li><a href="shop-product-list.html">Cricket Clothing</a></li>
                          <li><a href="shop-product-list.html">Fleeces</a></li>
                          <li><a href="shop-product-list.html">Gilets</a></li>
                          <li><a href="shop-product-list.html">Golf Tops</a></li>
                        </ul>
                      </div>
                      <div className="col-md-4 header-navigation-col">
                        <h4>Accessories</h4>
                        <ul>
                          <li><a href="shop-product-list.html">Belts</a></li>
                          <li><a href="shop-product-list.html">Caps</a></li>
                          <li><a href="shop-product-list.html">Gloves, Hats and Scarves</a></li>
                        </ul>

                        <h4>Clearance</h4>
                        <ul>
                          <li><a href="shop-product-list.html">Jackets</a></li>
                          <li><a href="shop-product-list.html">Bottoms</a></li>
                        </ul>
                      </div>
                      <div className="col-md-12 nav-brands">
                        <ul>
                          <li><a href="shop-product-list.html"><img title="esprit" alt="esprit" src="assets/pages/img/brands/esprit.jpg" /></a></li>
                          <li><a href="shop-product-list.html"><img title="gap" alt="gap" src="assets/pages/img/brands/gap.jpg" /></a></li>
                          <li><a href="shop-product-list.html"><img title="next" alt="next" src="assets/pages/img/brands/next.jpg" /></a></li>
                          <li><a href="shop-product-list.html"><img title="puma" alt="puma" src="assets/pages/img/brands/puma.jpg" /></a></li>
                          <li><a href="shop-product-list.html"><img title="zara" alt="zara" src="assets/pages/img/brands/zara.jpg" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li><a href="shop-item.html">Kids</a></li>
            <li className="dropdown dropdown100 nav-catalogue">
              <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                New
                
              </a>
              <ul className="dropdown-menu">
                <li>
                  <div className="header-navigation-content">
                    <div className="row">
                      <div className="col-md-3 col-sm-4 col-xs-6">
                        <div className="product-item">
                          <div className="pi-img-wrapper">
                            <a href="shop-item.html"><img src="assets/pages/img/products/model4.jpg" className="img-responsive" alt="Berry Lace Dress" /></a>
                          </div>
                          <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                          <div className="pi-price">$29.00</div>
                          <a href="#" className="btn btn-default add2cart">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4 col-xs-6">
                        <div className="product-item">
                          <div className="pi-img-wrapper">
                            <a href="shop-item.html"><img src="assets/pages/img/products/model3.jpg" className="img-responsive" alt="Berry Lace Dress" /></a>
                          </div>
                          <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                          <div className="pi-price">$29.00</div>
                          <a href="#" className="btn btn-default add2cart">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4 col-xs-6">
                        <div className="product-item">
                          <div className="pi-img-wrapper">
                            <a href="shop-item.html"><img src="assets/pages/img/products/model7.jpg" className="img-responsive" alt="Berry Lace Dress" /></a>
                          </div>
                          <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                          <div className="pi-price">$29.00</div>
                          <a href="#" className="btn btn-default add2cart">Add to cart</a>
                        </div>
                      </div>
                      <div className="col-md-3 col-sm-4 col-xs-6">
                        <div className="product-item">
                          <div className="pi-img-wrapper">
                            <a href="shop-item.html"><img src="assets/pages/img/products/model4.jpg" className="img-responsive" alt="Berry Lace Dress" /></a>
                          </div>
                          <h3><a href="shop-item.html">Berry Lace Dress</a></h3>
                          <div className="pi-price">$29.00</div>
                          <a href="#" className="btn btn-default add2cart">Add to cart</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" data-target="#" href="#">
                Pages 
                
              </a>
                
              <ul className="dropdown-menu">
                <li className="active"><a href="#">Home Default</a></li>
                <li><a href="#">Home Header Fixed</a></li>
                <li><a href="#">Home Light Footer</a></li>
                <li><a href="#">Product List</a></li>
                <li><a href="#">Search Result</a></li>
                <li><a href="#">Product Page</a></li>
                <li><a href="#">Shopping Cart (Null Cart)</a></li>
                <li><a href="#">Shopping Cart</a></li>
                <li><a href="#">Checkout</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">My account</a></li>
                <li><a href="#">My Wish List</a></li>
                <li><a href="#">Product Comparison</a></li>
                <li><a href="#">Standart Forms</a></li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms &amp; Conditions</a></li>
              </ul>
            </li>
            
            
            <li><a href="http://themeforest.net/item/metronic-responsive-admin-dashboard-template/4021469?ref=keenthemes&amp;utm_source=download&amp;utm_medium=banner&amp;utm_campaign=metronic_frontend_freebie" target="_blank">Admin theme</a></li>

            {/* <!-- BEGIN TOP SEARCH -->*/}
            <li className="menu-search">
              <span className="sep"></span>
              <i className="fa fa-search search-btn"></i>
              <div className="search-box">
                <form action="#">
                  <div className="input-group">
                    <input type="text" placeholder="Search" className="form-control" />
                    <span className="input-group-btn">
                      <button className="btn btn-primary" type="submit">Search</button>
                    </span>
                  </div>
                </form>
              </div> 
            </li>
            {/* <!-- END TOP SEARCH -->*/}
          </ul>
        </div>
        {/* <!-- END NAVIGATION -->*/}
      </div>
    </div>
    {/* <!-- Header END -->*/}
			</>
		);
}
import React, { useEffect, useState } from "react";
import CategorySideBar from "../includes/CategorySideBar";
import Footer from "../includes/Footer";
import ListFive from "../includes/ListFive";
import ListThree from "../includes/ListThree";
import ListTwo from "../includes/ListTwo";
import Partners from "../includes/Partners";
import SliderAd from "../includes/SliderAd";
import { latestProducts } from "../../utils/database";
import Navbar from "../includes/Navbar";
import Topbar from "../includes/Topbar";

export default function Home(props){
    const [new_products, setNewProducts] = useState([]);

    useEffect(()=>{
        setNewProducts(latestProducts());
        
    }, []);
    // console.log(new_products);
    return(
        <>  
            <Topbar />
            <Navbar cart={props.cart}/>
            <div className="page-slider margin-bottom-35">
                <div id="carousel-example-generic" className="carousel slide carousel-slider">
                    {/* <!-- Indicators --> */}
                    <ol className="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    </ol>

                    {/* <!-- Wrapper for slides --> */}
                    <div className="carousel-inner" role="listbox">
                        {/* <!-- First slide --> */}
                        <div className="item carousel-item-four active">
                            <div className="container">
                                <div className="carousel-position-four text-center">
                                    <h2 className="margin-bottom-20 animate-delay carousel-title-v3 border-bottom-title text-uppercase" data-animation="animated fadeInDown">
                                        Tones of <br/><span className="color-red-v2">Shop UI Features</span><br/> designed
                                    </h2>
                                    <p className="carousel-subtitle-v2" data-animation="animated fadeInUp">Lorem ipsum dolor sit amet constectetuer diam <br/>
                                    adipiscing elit euismod ut laoreet dolore.</p>
                                </div>
                            </div>
                        </div>
                        
                        {/* <!-- Second slide --> */}
                        <div className="item carousel-item-five">
                            <div className="container">
                                <div className="carousel-position-four text-center">
                                    <h2 className="animate-delay carousel-title-v4" data-animation="animated fadeInDown">
                                        Unlimted
                                    </h2>
                                    <p className="carousel-subtitle-v2" data-animation="animated fadeInDown">
                                        Layout Options
                                    </p>
                                    <p className="carousel-subtitle-v3 margin-bottom-30" data-animation="animated fadeInUp">
                                        Fully Responsive
                                    </p>
                                    <a className="carousel-btn" href="#" data-animation="animated fadeInUp">See More Details</a>
                                </div>
                                <img className="carousel-position-five animate-delay hidden-sm hidden-xs" src="assets/pages/img/shop-slider/slide2/price.png" alt="Price" data-animation="animated zoomIn" />
                            </div>
                        </div>

                        {/* <!-- Third slide --> */}
                        <div className="item carousel-item-six">
                            <div className="container">
                                <div className="carousel-position-four text-center">
                                    <span className="carousel-subtitle-v3 margin-bottom-15" data-animation="animated fadeInDown">
                                        Full Admin &amp; Frontend
                                    </span>
                                    <p className="carousel-subtitle-v4" data-animation="animated fadeInDown">
                                        eCommerce UI
                                    </p>
                                    <p className="carousel-subtitle-v3" data-animation="animated fadeInDown">
                                        Is Ready For Your Project
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Fourth slide --> */}
                        <div className="item carousel-item-seven">
                        <div className="center-block">
                                <div className="center-block-wrap">
                                    <div className="center-block-body">
                                        <h2 className="carousel-title-v1 margin-bottom-20" data-animation="animated fadeInDown">
                                            The most <br/>
                                            wanted bijouterie
                                        </h2>
                                        <a className="carousel-btn" href="#" data-animation="animated fadeInUp">But It Now!</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Controls --> */}
                    <a className="left carousel-control carousel-control-shop" href="#carousel-example-generic" role="button" data-slide="prev">
                        <i className="fa fa-angle-left" aria-hidden="true"></i>
                    </a>
                    <a className="right carousel-control carousel-control-shop" href="#carousel-example-generic" role="button" data-slide="next">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>

            <div className="main">
                <div className="container">
                    <ListFive latest_products={new_products} old_products={"none"}/>
                    <div className="row margin-bottom-40 ">
                        <CategorySideBar />
                        <ListThree top_three_products={new_products} addToCart={props.addToCart}/>
                    </div>
                    <div className="row margin-bottom-35 ">
                        <ListTwo />
                        <SliderAd />
                    </div>
                </div>
            </div>

            <Partners />

            <div className="steps-block steps-block-red">
                <div className="container">
                    <div className="row">
                    <div className="col-md-4 steps-block-col">
                        <i className="fa fa-truck"></i>
                        <div>
                        <h2>Free shipping</h2>
                        <em>Express delivery withing 3 days</em>
                        </div>
                        <span>&nbsp;</span>
                    </div>
                    <div className="col-md-4 steps-block-col">
                        <i className="fa fa-gift"></i>
                        <div>
                        <h2>Daily Gifts</h2>
                        <em>3 Gifts daily for lucky customers</em>
                        </div>
                        <span>&nbsp;</span>
                    </div>
                    <div className="col-md-4 steps-block-col">
                        <i className="fa fa-phone"></i>
                        <div>
                        <h2>477 505 8877</h2>
                        <em>24/7 customer care available</em>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <Footer top_three_products={new_products}/>
            

        {/* {new_products.map((item, index)=>(
            <div key={item.id} id={`product-pop-up-${item.id}`} style={{display: "none", width: "700px"}}>
                <div className="product-page product-pop-up">
                <div className="row">
                    <div className="col-md-6 col-sm-6 col-xs-3">
                    <div className="product-main-image">
                        <img src={item.cover_photo} alt="Cool green dress with red bell" className="img-responsive" />
                    </div>
                    <div className="product-other-images">
                        <a href="#" className="active"><img alt="Berry Lace Dress" src="assets/pages/img/products/model3.jpg" /></a>
                        <a href="#"><img alt="Berry Lace Dress" src="assets/pages/img/products/model4.jpg" /></a>
                        <a href="#"><img alt="Berry Lace Dress" src="assets/pages/img/products/model5.jpg" /></a>
                    </div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-9">
                    <h2>Cool green dress with red bell</h2>
                    <div className="price-availability-block clearfix">
                        <div className="price">
                        <strong><span>$</span>47.00</strong>
                        <em>$<span>62.00</span></em>
                        </div>
                        <div className="availability">
                        Availability: <strong>In Stock</strong>
                        </div>
                    </div>
                    <div className="description">
                        <p>Lorem ipsum dolor ut sit ame dolore  adipiscing elit, sed nonumy nibh sed euismod laoreet dolore magna aliquarm erat volutpat Nostrud duis molestie at dolore.</p>
                    </div>
                    <div className="product-page-options">
                        <div className="pull-left">
                        <label className="control-label">Size:</label>
                        <select className="form-control input-sm">
                            <option>L</option>
                            <option>M</option>
                            <option>XL</option>
                        </select>
                        </div>
                        <div className="pull-left">
                        <label className="control-label">Color:</label>
                        <select className="form-control input-sm">
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Black</option>
                        </select>
                        </div>
                    </div>
                    <div className="product-page-cart">
                        <div className="product-quantity">
                            <input id="product-quantity" type="text" value="1" readOnly name="product-quantity" className="form-control input-sm" />
                        </div>
                        <button className="btn btn-primary" type="submit">Add to cart</button>
                        <a href="shop-item.html" className="btn btn-default">More details</a>
                    </div>
                    </div>

                    <div className="sticker sticker-sale"></div>
                </div>
                </div>
            </div>
        ))} */}
        

        </>
    );
}
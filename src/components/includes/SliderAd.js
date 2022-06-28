import React, { useEffect, useState } from "react";

export default function SliderAd(){
    const [slides, setSlides]= useState([]);
    const getSlides = ()=>{
        const slides = [
            {
                id:1,
                img:"assets/pages/img/index-sliders/slide1.jpg",
                title: 'Promo1'
            },
            {
                id:2,
                img:"assets/pages/img/index-sliders/slide2.jpg",
                title: 'Promo2'
            },
            {
                id:3,
                img:"assets/pages/img/index-sliders/slide3.jpg",
                title: 'Promo3'
            }
        ];
        
        setSlides(slides);
    }
    useEffect(() => {
        
        getSlides();
    }, []);

    return(
        <div className="col-md-6 shop-index-carousel">
            <div className="content-slider">
              <div id="myCarousel" className="carousel slide" data-ride="carousel">
                
                <ol className="carousel-indicators">
                    {slides.map((slide, index)=>(
                        <li key={slide.id} data-target="#myCarousel" data-slide-to={index}  className={ index===0 ? ('active'):'' }></li>
                    ))}
                  
                </ol>
                <div className="carousel-inner">
                    {slides.map((slide, index)=>(
                        <div key={slide.id} className={index===0 ? ('item active') : 'item'}>
                            <img src={slide.img} className="img-responsive" alt={slide.title} />
                        </div>
                    ))}
                  
                </div>
              </div>
            </div>
          </div>
    );
}
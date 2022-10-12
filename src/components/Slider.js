import React from "react";

const Slider =()=>{
    return(
        <div className="section ">
        <div className="hero-slider swiper-container slider-nav-style-1 slider-dot-style-1">
          { /* <!-- Hero slider Active --> */}
            <div className="swiper-wrapper">
               { /*<!-- Single slider item -->*/}
                <div className="hero-slide-item slider-height swiper-slide d-flex bg-color1">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 align-self-center sm-center-view">
                                <div className="hero-slide-content slider-animated-1">
                                    <span className="category">Offer 2021</span>
                                    <h2 className="title-1">Sale Up To </h2>
                                    <h2 className="title-2"><span>50%</span> Off</h2>
                                    <a href="shop-left-sidebar.html" className="btn btn-lg btn-primary btn-hover-dark"> Shop Now <i
                                            className="fa fa-shopping-basket ml-15px" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div
                                className="col-xl-7 col-lg-7 col-md-7 col-sm-7 d-flex justify-content-center position-relative">
                                <div className="show-case">
                                    <div className="hero-slide-image">
                                        <img src="C:/Users/maria/OneDrive/Desktop/Beacon Project/ecommerce/src/components/slider-image/slider-1.png" alt="" />
                                    </div>
                                    <div className="display-wrapper">
                                        <div className="content-side">
                                            <h4 className="title">Full Dress</h4>
                                            <span className="price">$21.00</span>
                                            <a href="shop-left-sidebar.html" className="shop-link">Shop Now</a>
                                        </div>
                                        <div className="image-side">
                                            <img src="C:/Users/maria/OneDrive/Desktop/Beacon Project/ecommerce/src/components/slider-image/display-image.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Single slider item -->*/}
                <div className="hero-slide-item slider-height swiper-slide d-flex bg-color2">
                    <div className="container align-self-center">
                        <div className="row">
                            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5 align-self-center sm-center-view">
                                <div className="hero-slide-content slider-animated-1">
                                    <span className="category">Offer 2021</span>
                                    <h2 className="title-1">Sale Up To </h2>
                                    <h2 className="title-2"><span>50%</span> Off</h2>
                                    <a href="shop-left-sidebar.html" className="btn btn-lg btn-primary btn-hover-dark"> Shop Now <i
                                            className="fa fa-shopping-basket ml-15px" aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div
                                className="col-xl-7 col-lg-7 col-md-7 col-sm-7 d-flex justify-content-center position-relative">
                                <div className="show-case">
                                    <div className="hero-slide-image">
                                        <img src="C:\Users\maria\OneDrive\Desktop\Beacon Project\ecommerce\src\components\slider-image\slider-2.png" alt="" />
                                    </div>
                                    <div className="display-wrapper">
                                        <div className="content-side">
                                            <h4 className="title">Full Dress</h4>
                                            <span className="price">$21.00</span>
                                            <a href="shop-left-sidebar.html" className="shop-link">Shop Now</a>
                                        </div>
                                        <div className="image-side">
                                            <img src="C:/Users/maria/OneDrive/Desktop/Beacon Project/ecommerce/src/components/slider-image/display-image.png" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           { /*<!-- Add Pagination -->*/}
            <div className="swiper-pagination swiper-pagination-white"></div>
           { /*<!-- Add Arrows -->*/}
            <div className="swiper-buttons">
                <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
        </div>
    </div>
    );
}
export default Slider;
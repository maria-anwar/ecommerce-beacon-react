import React from "react";

const SingleProduct = (props) =>{
    return(
        <>
            <div className="product-details-area pt-100px pb-100px">
                <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px">
                    {/* <!-- Swiper --> */}
                    <div className="swiper-container zoom-top">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide zoom-image-hover">
                                <img className="img-responsive m-auto" src={props.item.img}
                                    alt="maroon"
                                    width ="800px"
                                    height ="800px"
                                />
                            </div>
                            <div className="swiper-slide zoom-image-hover">
                                <img className="img-responsive m-auto" src={props.item.img}
                                    alt="silk"/>
                            </div>
                            <div className="swiper-slide zoom-image-hover">
                                <img className="img-responsive m-auto" src={props.item.img}
                                    alt="maroon-silk"/>
                            </div>

                        </div>
                    </div>
                    <div className="swiper-container zoom-thumbs mt-3 mb-3">
                        <div className="swiper-wrapper">
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 col-xs-12" data-aos="fade-up" data-aos-delay="200">
                    <div className="product-details-content quickview-content">
                        <h2>Ardene Microfiber Tights</h2>
                        <div className="pricing-meta">
                            <ul>
                                <li className="old-price not-cut">pkr:{props.item.price}</li>
                            </ul>
                        </div>
                        <div className="pro-details-rating-wrap">
                            <div className="rating-product">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                            </div>
                            <span className="read-review"><a className="reviews" href="#">( 5 Customer Review )</a></span>
                        </div>
                        <p className="mt-30px mb-0">Lorem ipsum dolor sit amet, consect adipisicing elit, sed do eiusmod tempor incidi ut labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita ullamco laboris nisi
                            ut aliquip ex ea commodo </p>
                        <div className="pro-details-quality">
                            <div className="cart-plus-minus">
                                <input className="cart-plus-minus-box" type="text" name="qtybutton" value="1" />
                            </div>
                            <div className="pro-details-cart">
                                <button className="add-cart" href="#"> Add To
                                    Cart</button>
                            </div>
                            <div className="pro-details-compare-wishlist pro-details-wishlist ">
                                <a href="wishlist.html"><i className="pe-7s-like"></i></a>
                            </div>
                            <div className="pro-details-compare-wishlist pro-details-compare">
                                <a href="compare.html"><i className="pe-7s-refresh-2"></i></a>
                            </div>
                        </div>
                        <div className="pro-details-sku-info pro-details-same-style  d-flex">
                            <span>SKU: </span>
                            <ul className="d-flex">
                                <li>
                                    <a href="#">Ch-256xl</a>
                                </li>
                            </ul>
                        </div>
                        <div className="pro-details-categories-info pro-details-same-style d-flex">
                            <span>Categories: </span>
                            <ul className="d-flex">
                                <li>
                                    <a href="#">Fashion.</a>
                                </li>
                                <li>
                                    <a href="#">eCommerce</a>
                                </li>
                            </ul>
                        </div>
                        <div className="pro-details-social-info pro-details-same-style d-flex">
                            <span>Share: </span>
                            <ul className="d-flex">
                                <li>
                                    <a href="#"><i className="fa fa-facebook"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-twitter"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-google"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-youtube"></i></a>
                                </li>
                                <li>
                                    <a href="#"><i className="fa fa-instagram"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default SingleProduct;
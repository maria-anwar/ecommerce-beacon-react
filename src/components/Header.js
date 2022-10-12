import React from "react";
import {NavLink} from "react-router-dom";
import { Link } from "react-router-dom";
import  "../styles/dropdown.css";
//import img1 from './logo.png';
//import img1 from './C:/Users/maria/OneDrive/Desktop/Beacon Project/ecommerce/src/img-logo/imgLogo.png';
//import logo from './C:/Users/maria/OneDrive/Desktop/Mern Stack/facebook/src/images/to/cardProfile.jpg'; 
//import logo from './C:/Users/maria/OneDrive/Desktop/Beacon Project/ecommerce/src/img-logo/to/imgLogo.png'; 

const Header = () =>{
   
    return(

        <div>
            <div className="header-to-bar"> HELLO EVERYONE! 25% Off All Products </div>
            <header>
        <div className="header-main sticky-nav ">
            <div className="container position-relative">
                <div className="row">
                    <div className="col-auto align-self-center">
                        <div className="header-logo">
                            <Link to="index.html">
                            <img 
                               src="/imgLogo.png" 
                                //src={logo} className="logo"
                                alt="Site" />
                            </Link>
                        </div>
                    </div>
                    <div className="col align-self-center d-none d-lg-block">
                        <div className="main-menu">
                            <ul>
                                <li ><NavLink to="/">Home <i className="pe-7s-angle-down"></i></NavLink>
                                </li>
                                <li className="dropdown"><NavLink to="#">Shop </NavLink>
                                    <ul className=" dropdown sub-menu d-block">
                                        <li className="d-flex">
                                            <ul className="d-block dropdown-ul" >

                                                <li  className="title"><NavLink to="/Category/male">MEN</NavLink></li>
                                                <li><NavLink to="shop-3-column.html">Shirt</NavLink></li>
                                                <li><NavLink to="shop-4-column.html">Wrist Watch</NavLink></li>
                                                <li><NavLink to="shop-left-sidebar.html">Wallet </NavLink></li>
                                                <li><NavLink to="shop-right-sidebar.html">Shoes</NavLink></li>
                                                
                                                
                                            </ul>
                                            <ul className="d-block dropdown-ul">
                                                <li className="title"><NavLink to="/Category/female">WOMEN</NavLink></li>
                                                <li><NavLink to="single-product.html">Kurta</NavLink></li>
                                                <li><NavLink to="single-product-variable.html">Bag</NavLink></li>
                                                <li><NavLink to="single-product-affiliate.html">Hat</NavLink></li>
                                                <li><NavLink to="single-product-group.html">Shoes</NavLink></li>
                                            
                                            </ul>              
                                        </li>
                                        <li>

                                           {/* <ul className="menu-banner w-100">
                                                <li>
                                                    <a className="p-0" to="shop-left-sidebar.html">
                                                        <img
                                                            className="img-responsive w-100"
                                                            src="assets/images/banner/7.jpg" alt=""/>
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-0" to="shop-left-sidebar.html">
                                                        <img
                                                            className="img-responsive w-100"
                                                            src="assets/images/banner/8.jpg" alt=""/>

                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="p-0" to="shop-left-sidebar.html">
                                                        <img
                                                            className="img-responsive w-100"
                                                            src="assets/images/banner/9.jpg" alt=""/>
                                                    </a>
                                                </li>
                                            </ul> */}
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown "><NavLink to="#">Blogs <i className="pe-7s-angle-down"></i></NavLink>
                                    <ul className="sub-menu">
                                        <li><NavLink to="blog-grid.html">Blog Grid Page</NavLink></li>                                       
                                        <li><NavLink to="blog-single.html">Blog Single Page</NavLink></li>
                                        <li><NavLink to="blog-single-right-sidebar.html">Single Right Sidbar</NavLink></li>
                                    </ul>
                                </li>
                                <li><NavLink to="about.html">About us</NavLink></li>
                                <li><NavLink to="contact.html">Contact us</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Header Action Start --> */}
                    <div className="col col-lg-auto align-self-center pl-0">
                        <div className="header-actions">
                            <Link to="/SignUp" className="header-action-btn login-btn" data-bs-toggle="modal"
                                data-bs-target="#loginActive">Sign In</Link>
                            {/* <!-- Single Wedge Start --> */}
                            <Link to="/Search" className="header-action-btn" data-bs-toggle="modal" data-bs-target="#searchActive">
                                <i className="fa fa-search"></i>
                            
                            </Link>
                            <a>

                            </a>
                            
                            {/* <!-- Single Wedge End --> */}
                        
                            {/* <!-- Single Wedge End --> */}
                            <Link to="/Cart" 
                                className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                <i className="fa fa-shopping-cart"></i>
                                <span className="header-action-num">01</span>
                                 {/* <!-- <span className="cart-amount">€30.00</span> -->  */}
                             
                            </Link> 
                            
                            {/* <a href="#offcanvas-cart" data-bs-toggle="offcanvas"
                                class="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                <i class="fa fa-shopping-cart"></i>
                                <span class="header-action-num">01</span>
                                <!-- <span class="cart-amount">€30.00</span> --> 
                            </a> */}
                            
                        </div>
                        {/* <!-- Header Action End --> */}
                    </div>
                    <div id="offcanvas-cart" className="offcanvas offcanvas-start offcanvas-cart">
                <div className="inner">
                 <div className="head">
                <span className="title">Cart</span>
                <button className="offcanvas-close">×</button>
            </div>
            <div className="body customScroll">
                <ul className="minicart-product-list">
                    <li>
                        <Link to="single-product.html" className="image"><img src="https://cdn.pixabay.com/photo/2017/08/09/10/00/shopping-cart-2614015_960_720.png"
                                alt="Cart product Image"/></Link>
                        <div className="content">
                            <Link to="single-product.html" className="title">Women's Elizabeth Coat</Link>
                            <span className="quantity-price">1 x <span className="amount">$18.86</span></span>
                            <Link to="#" className="remove">×</Link>
                        </div>
                    </li>
                    <li>
                        <Link to="single-product.html" className="image"><img src="https://cdn.pixabay.com/photo/2017/08/09/10/00/shopping-cart-2614015_960_720.png"
                                alt="Cart product"/></Link>
                        <div className="content">
                            <Link to="single-product.html" className="title">Long sleeve knee length</Link>
                            <span className="quantity-price">1 x <span className="amount">$43.28</span></span>
                            <Link to="#" className="remove">×</Link>
                        </div>
                    </li>
                    <li>
                        <Link to="single-product.html" className="image"><img src="https://cdn.pixabay.com/photo/2017/08/09/10/00/shopping-cart-2614015_960_720.png"
                                alt="Cart product"/></Link>
                        <div className="content">
                            <Link to="single-product.html" className="title">Cool Man Wearing Leather</Link>
                            <span className="quantity-price">1 x <span className="amount">$37.34</span></span>
                            <Link to="#" className="remove">×</Link>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="foot">
                <div className="buttons mt-30px">
                    <a to="cart.html" className="btn btn-dark btn-hover-primary mb-30px">view cart</a>
                    <a to="checkout.html" className="btn btn-outline-dark current-btn">checkout</a>
                </div>
            </div>
        </div>
                    </div>
                    
                </div>
            </div>
            </div>


            








    </header>
        </div>
        
    );       
    
}
export default Header;
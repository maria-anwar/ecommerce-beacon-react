import React from "react";
import { Link } from "react-router-dom";
//https://www.scienceabc.com/wp-content/uploads/2016/05/shopping-cart.jpg

const Item = () =>{
   
 return(
    <>
         <div className="body customScroll cartMargin">
                <ul className="minicart-product-list">
                    <li>
                        <Link  to="single-product.html" className="image"><img src="https://www.scienceabc.com/wp-content/uploads/2016/05/shopping-cart.jpg"
                                
                                alt="Cart product Image"/></Link >
                              
                        <div className="content contentparentdiv">
                        <div>
                                < Link to="single-product.html" className="title">Product Title</Link >
                                <p>description</p>
                                <h6>Pkr:12345</h6>
                            </div> 
                            <div className="displayStyle">
                                <div className="setMargin">1x</div>
                                <div className="btn-group btnGroupSize">                                
                                    <button type="button" className="btn btn-dark btnstyle btnGroupMrg">+</button>
                                    <button type="button" className="btn btn-dark btnstyle btnGroupMrg">-</button>
                                    </div>                 
                                {/* <span className="quantity-price">1 x </span> */}
                            </div>                                                               
                                <div><i className="fa fa-trash-o trashStyle"></i></div> 
                             
                            <Link  to="#" className="remove removebtn">×</Link >
                        </div>
                    </li>   
                </ul>
            </div>
            <hr /> {/*//to draw line */}
    </>
 );
}
export default Item;
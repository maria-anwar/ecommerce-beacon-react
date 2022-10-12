import React from "react";
import { Link } from "react-router-dom";

const ProductCard =(props)=>{
    return(
        <React.Fragment>
            
                            {/* <!-- Shop bottom Area Start --> */}
                            
        <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-30px" data-aos="fade-up" data-aos-delay="200">
                                                {/* <!-- Single Prodect --> */}
            <div className="product">
                <div className="thumb">
                    <Link to={`/Product/${props.item.id}`} className="image">
                        <img src={props.item.img}
                         alt= {props.item.name} 
                         width ="270px"
                         height ="310px"
                         />
                             {/* <img className="hover-image"
                             src="assets/images/product-image/1.jpg" alt="Product" /> */}
                    </Link>
                        <span className="badges">
                            <span className="new">New</span>
                        </span>
                          <Link to="/Cart/id">
                            <button title="Add To Cart" className=" add-to-cart">Add To Cart</button> 
                          </Link>                              
                                                    
                </div>
                     <div className="content">
                            <h5 className="title">
                                <a href="/Product/id">{props.item.description}</a>
                            </h5>
                             <span className="price">
                                <span className="new">${props.item.price}</span>
                             </span>
                        </div>
                    </div>
                </div>
            
            
        </React.Fragment>
    );
}
export default ProductCard;

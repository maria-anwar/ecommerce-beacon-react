import React from "react";

const ProductFilter = () =>{
    return(
        <div className="shop-top-bar d-flex">
        {/* <!-- Filet Left Side start --> */}
            <p><span>12</span> Product Found of <span>30</span></p>
        {/* <!-- Left Side End --> */}
            <div className="shop-tab nav">
            <a className="active" href="#shop-grid" data-bs-toggle="tab">
                <i className="fa fa-th" aria-hidden="true"></i>
            </a>
            <a href="#shop-list" data-bs-toggle="tab">
                <i className="fa fa-list" aria-hidden="true"></i>
            </a>
        </div>
        {/* <!-- Right Side Start --> */}
        <div className="select-shoing-wrap d-flex align-items-center">
            <div className="shot-product">
                <p>Sort By:</p>
            </div>
            <div className="shop-select">
                <select className="shop-sort">
                    <option data-display="Relevance">Relevance</option>
                    <option value="1"> Name, A to Z</option>
                    <option value="2"> Name, Z to A</option>
                    <option value="3"> Price, low to high</option>
                    <option value="4"> Price, high to low</option>
                </select>
            </div>
        </div>
        {/* <!-- Right Side End --> */}
        </div>
    );
}
export default ProductFilter;
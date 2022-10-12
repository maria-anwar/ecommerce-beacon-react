import React from "react";

const HomeSection2 =()=>{
    return(
        <>
             <div className="banner-area pt-100px pb-100px">
        <div className="container">
            <div className="row">
                <div className="single-col">
                    <a href="shop-left-sidebar.html" className="single-banner">
                        <img src="https://img.freepik.com/free-photo/magnificent-woman-long-bright-skirt-dancing-studio-carefree-inspired-female-model-posing-with-pleasure-yellow_197531-11084.jpg?w=2000" alt="" 
                        width="720px"
                        height="270px"
                        />
                        <div className="item-disc">
                            <span className="item-title">Women</span>
                            <span className="item-amount">16 items</span>
                        </div>
                    </a>
                </div>
                <div className="single-col center-col">
                    <div className="single-banner">
                        <img src="https://musajute.com/wp-content/uploads/2021/07/U219c091a852c45029f95ff45c1254fbe2.jpg" alt="best-seller"
                            width="270px"
                            height="270px"
                        />
                        <div className="item-disc">
                            <h2 className="title">#bestsellers</h2>
                            <a href="shop-left-sidebar.html" className="shop-link">Shop Now</a>
                        </div>
                    </div>
                </div>
                <div className="single-col">
                    <a href="shop-left-sidebar.html" className="single-banner">
                        <img src="https://howmendress.com/wp-content/uploads/2019/07/featureimage-how-men-dress-stock-photos-13-980x549.jpg" 
                         alt=""
                         width="720px"
                         height="270px"
                        />
                        <div className="item-disc">
                            <span className="item-title">Nomen</span>
                            <span className="item-amount">16 items</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
        </>
    );
}
export default HomeSection2;
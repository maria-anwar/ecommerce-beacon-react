import React from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
//import { useParams } from "react-router-dom";
const ProductList=(props)=>{
    const params = useParams();

    return(
        <>
        {props.data.map((item, index) =>(
           item.category === params.category &&
            < ProductCard item={item}/>      
                     
        ))}
        </>
    );
}
export default ProductList;
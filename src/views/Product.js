import React from "react";
import { useParams } from "react-router-dom";
import SingleProduct from "../components/SingleProduct";


const Product = () =>{
      const params = useParams();
    let productsData = [
        {
             id: 1,
             category:"female",
             name:"Red Shirt",
             img:"https://static.fibre2fashion.com/MemberResources/LeadResources/1/2019/7/Seller/19165533/Images/19165533_0_women-s-formal-shirts.jpg",            
             description:"Formal waer in red color",
             price:7500,
        },
         {
             id: 2,
             category:"female",
             name:"brown bag",
             img:"https://aodour.oss-ap-southeast-1.aliyuncs.com/globalProduct/2022-03-08/O1CN01eVXWeJ1Xm12biEyIg_!!2244352965-0-cib.jpg",            
             description:"Cross shoulder ladies brown bag",
             price:15000,
         },
         {
             id: 3,
             name:"brown hat",
             category:"female",
             img:"https://image.shutterstock.com/image-photo/lady-hat-260nw-392378551.jpg",            
             description:"Brown hat with ribbon and flowers",
             price:4000,
         },
         {
             id: 4,
             name:"Heels",
             category:"female",
             img:"https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/17927136/2022/4/19/8f95e991-0cb2-408a-b9ed-ca3dbd1ebedc1650352376388BrunoManettiNude-ColouredPUBlockMules1.jpg",            
             description:"Heels in beige color with classic look",
             price:2500,
         },
         {
             id:5,
             category:"male",
             name:"blue Shirt",
             img:"https://5.imimg.com/data5/QB/WW/MY-40698162/men-formal-shirt-500x500.jpg",            
             description:"Blue Formal shirt",
             price:6000
         },
         {
             id: 6,
             category:"male",
             name:"Grey Pants",
             img:"https://i.pinimg.com/736x/4d/7d/db/4d7ddbaa4c50910a3002ab9fde435012.jpg",            
             description:"men Formal wear",
             price:9000
         },
       
         {
             id: 7,
             category:"male",
             name:"Brown shoes",
             img:"https://5.imimg.com/data5/PZ/OT/QP/SELLER-100719686/men-formal-shoes-500x500.jpg",            
             description:"lroem ipsum",
             price:20000,
         },
         {
             id: 8,
             category:"male",
             name:"Wallet",
             img:"https://static-01.daraz.com.bd/p/1a35965db9b72509f5763fd9815206a0.jpg",            
             description:"set of men wallets",
             price:5700,
         },   

     ];
      const getSingleItem = () =>{
        const item = productsData.find((item) => item.id === +params.id ) 
        return item;
        
       };
     return <SingleProduct item={getSingleItem ()}/>
   
    
     
}
export default Product;
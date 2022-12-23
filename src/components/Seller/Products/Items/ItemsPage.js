import ItemsCard from "./ItemsCard";
import ProductsData from "../../../UI/ProductsData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemsPage= () =>{
    let { category,subcategory} = useParams();
    const [data,setData]=useState([])
    useEffect(()=>{
        setData(ProductsData.filter((item)=>item.subCategory===subcategory && item.category=== category))
    },[category,subcategory])
    return(
    <div>
        {data.map((props) => {return (<ItemsCard id={props.id} title={props.productName} imgsrc={props.image} price={props.price+"$"} quantity={props.quantity}/>)})}
    </div>);
    }
export default ItemsPage;
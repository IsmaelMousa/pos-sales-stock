import ItemsCard from "./ItemsCard";
import array from "../../UI/Data";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemsPage= () =>{
    let { category,subcategory} = useParams();
    const [data,setData]=useState([])
    useEffect(()=>{
        setData(array.filter((item)=>item.subCategory===subcategory && item.category=== category))
    },[category,subcategory])
     
  
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.productName} imgsrc={props.image} price={props.price+"$"} quantity={props.quantity}/>)})}
    </div>);
    }
export default ItemsPage;
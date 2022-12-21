import ItemsCard from "./Items/ItemsCard";
import ProductsData from "../../UI/ProductsData";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Search= () =>{
    let { que} = useParams();
    const [data,setData]=useState([])
    useEffect(()=>{
           setData(ProductsData.filter((item)=>item.id==que || item.category.toLocaleLowerCase().includes(que.toLocaleLowerCase())||item.subCategory.toLocaleLowerCase().includes(que.toLocaleLowerCase())||item.productName.toLocaleLowerCase().includes(que.toLocaleLowerCase())||item.costPrice==que||item.price==que||item.quantity==que))
    },[que])
     
  
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.productName} imgsrc={props.image} price={props.price+"$"} quantity={props.quantity}/>)})}
    </div>);
    }
export default Search;
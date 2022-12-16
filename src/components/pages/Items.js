import ItemsCard from "./ItemsCard";
import array from "./Data";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemsPage= () =>{
    let  results = useParams();
    const url = new URL(window.location.href);
  
    var data=array.filter((item)=>item.subCategory== url.searchParams.get('subcategory') && item.category== url.searchParams.get('category'))
    useEffect(()=>{
        const data = array.filter((item)=>item.subCategory== url.searchParams.get('subcategory') && item.category== url.searchParams.get('category'))

        console.log(data)  
    },[results])
     
  
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.productName} imgsrc={props.image} price={props.price+"$"} quantity={props.quantity}/>)})}
    </div>);
    }
export default ItemsPage;
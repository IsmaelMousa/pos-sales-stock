import ItemsCard from "./WomenItemsCard"
import img1 from"../../../images/dress-women-1.webp";
import img2 from"../../../images/dress-women-2.webp";
import img3 from"../../../images/dress-women-3.webp";
import img4 from"../../../images/dress-women-4.webp";
import img5 from"../../../images/dress-women-5.webp";
import img6 from"../../../images/dress-women-6.webp";
import img7 from"../../../images/dress-women-7.webp";
import img8 from"../../../images/dress-women-8.webp";

const WomenDressPage= () =>{
    const data = 
    [
        { title: "Boutique Sequins",img: img1,price: "300$",quantity :30},
        { title: "Fine knitting",img: img4,price: "270$",quantity :85},
        { title: "RIB ROLL" ,img: img3,price: "310$",quantity :45},
        { title: "Striped Knitted",img: img5,price: "250$",quantity :67},
        { title: "Wedding dress",img: img2,price: "200$",quantity :21},
        { title: "BRIDESMAID HAND",img: img6,price: "400$",quantity :63},
        { title: "PLUS WOVEN",img: img7,price: "360$",quantity :84},
        { title: "MONO PRINTED",img: img8,price: "220$",quantity :89},
    ]
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default WomenDressPage;
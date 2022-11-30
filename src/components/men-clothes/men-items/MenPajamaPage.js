import MenItemsCard from "./MenItemsCard";
import img1 from"../../../images/pajama-men-1.webp";
import img2 from"../../../images/pajama-men-2.webp";
import img3 from"../../../images/pajama-men-3.webp";
import img4 from"../../../images/pajama-men-4.webp";
import img5 from"../../../images/pajama-men-5.webp";
import img6 from"../../../images/pajama-men-6.webp";
import img7 from"../../../images/pajama-men-7.webp";
import img8 from"../../../images/pajama-men-8.webp";

const MenPajamaPage= () =>{
const data = 
[
    { title: "Bunny Flower",img: img1,price: "50$",quantity :30},
    { title: "Bunny Para",img: img4,price: "50$",quantity :33},
    { title: "Bunny Swiki",img: img3,price: "50$",quantity :63},
    { title: "Bunny Black",img: img5,price: "50$",quantity :5},
    { title: "Black Oneal",img: img2,price: "30$",quantity :60},
    { title: "White Pata",img: img6,price: "90$",quantity :22},
    { title: "OFF-White CA",img: img7,price: "40$",quantity :16},
    { title: "Gray Pata",img: img8,price: "90$",quantity :20},
]
return(
<div>
    {data.map((props) => {return (<MenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
</div>);
}
export default MenPajamaPage;
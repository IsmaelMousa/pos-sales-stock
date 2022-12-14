import ItemsCard from "./KidsItemsCard";
import img1 from"../../../images/short-kids-1.webp";
import img2 from"../../../images/short-kids-2.webp";
import img3 from"../../../images/short-kids-3.webp";
import img4 from"../../../images/short-kids-4.webp";
import img5 from"../../../images/short-kids-5.webp";
import img6 from"../../../images/short-kids-6.webp";
import img7 from"../../../images/short-kids-7.webp";
import img8 from"../../../images/short-kids-8.webp";

const KidsShortPage= () =>{
const data = 
[
    { title: "Wide belt",img: img1,price: "50$",quantity :40},
    { title: "Girle Mode",img: img2,price: "70$",quantity :10},
    { title: "Uniform Short",img: img3,price: "90$",quantity :30},
    { title: "waist Denim",img: img4,price: "55$",quantity :25},
    { title: "Uniform Boy",img: img5,price: "50$",quantity :35},
    { title: "Jeans Boy",img: img6,price: "40$",quantity :25},
    { title: "Waist Denim",img: img7,price: "45$",quantity :20},
    { title: "Short Decent",img: img8,price: "70$",quantity :30},
]
return(
<div>
    {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
</div>);
}
export default   KidsShortPage;
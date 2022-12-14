import KidsItemsCard from "./KidsItemsCard";
import img1 from"../../../images/pajama-kids-1.webp";
import img2 from"../../../images/pajama-kids-2.webp";
import img3 from"../../../images/pajama-kids-3.webp";
import img4 from"../../../images/pajama-kids-4.webp";
import img5 from"../../../images/pajama-kids-5.webp";
import img6 from"../../../images/pajama-kids-6.webp";
import img7 from"../../../images/pajama-kids-7.webp";
import img8 from"../../../images/pajama-kids-8.webp";

const KidsPajamaPage= () =>{
const data = 
[
    { title: "Black&residential",img: img1,price: "30$",quantity :20},
    { title: "Cartoon Style",img: img2,price: "30$",quantity :25},
    { title: "Happy color",img: img3,price: "30$",quantity :28},
    { title: "Looney Tunes",img: img4,price: "35$",quantity :10},
    { title: "Dark Style",img: img5,price: "35$",quantity :30},
    { title: "white pajama",img: img6,price: "35$",quantity :25},
    { title: "Light color",img: img7,price: "40$",quantity :16},
    { title: "Baby colore",img: img8,price: "40$",quantity :41},
]
return(
<div>
    {data.map((props) => {return (<KidsItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
</div>);
}
export default  KidsPajamaPage;
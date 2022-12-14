import ItemsCard from "./KidsItemsCard";
import img1 from"../../../images/hat-kids-1.webp";
import img2 from"../../../images/hat-kids-2.webp";
import img3 from"../../../images/hat-kids-3.webp";
import img4 from"../../../images/hat-kids-4.webp";
import img5 from"../../../images/hat-kids-5.webp";
import img6 from"../../../images/hat-kids-6.webp";
import img7 from"../../../images/hat-kids-7.webp";
import img8 from"../../../images/hat-kids-8.webp";

const KidsHatPage= () =>{
const data = 
[
    { title: "Colorful cap",img: img1,price: "10$",quantity :40},
    { title: "Striped cap",img: img2,price: "15$",quantity :10},
    { title: "Blue cap",img: img3,price: "20$",quantity :30},
    { title: "Pom decor",img: img4,price: "15$",quantity :20},
    { title: "Color gradation",img: img5,price: "15$",quantity :30},
    { title: "Light color",img: img6,price: "20$",quantity :15},
    { title: "Red cap",img: img7,price: "30$",quantity :20},
    { title: "Plain hat",img: img8,price: "25$",quantity :30},
]
return(
<div>
    {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
</div>);
}
export default   KidsHatPage;
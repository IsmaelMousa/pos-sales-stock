import KidsItemsCard from "./KidsItemsCard";
import img1 from"../../../images/pants-kids-1.webp";
import img2 from"../../../images/pants-kids-2.webp";
import img3 from"../../../images/pants-kids-3.webp";
import img4 from"../../../images/pants-kids-4.webp";
import img5 from"../../../images/pants-kids-5.webp";
import img6 from"../../../images/pants-kids-6.webp";
import img7 from"../../../images/pants-kids-7.webp";
import img8 from"../../../images/pants-kids-8.webp";

const KidsPantsPage= () =>{
const data = 
[
    { title: "Black jeans",img: img1,price: "50$",quantity :40},
    { title: "Blue Skini",img: img2,price: "70$",quantity :10},
    { title: "Black jeans",img: img3,price: "90$",quantity :30},
    { title: "Girl Style",img: img4,price: "55$",quantity :25},
    { title: "light blue",img: img5,price: "50$",quantity :35},
    { title: "star Style",img: img6,price: "40$",quantity :25},
    { title: "Baby Jeans",img: img7,price: "45$",quantity :20},
    { title: "Baby Cartoon",img: img8,price: "70$",quantity :30},
]
return(
<div>
    {data.map((props) => {return (<KidsItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
</div>);
}
export default   KidsPantsPage;
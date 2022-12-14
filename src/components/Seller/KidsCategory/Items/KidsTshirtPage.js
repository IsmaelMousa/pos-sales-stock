import ItemsCard from "./KidsItemsCard";
import img1 from"../../../images/tshirt-kids-1.webp";
import img2 from"../../../images/tshirt-kids-2.webp";
import img3 from"../../../images/tshirt-kids-3.webp";
import img4 from"../../../images/tshirt-kids-4.webp";
import img5 from"../../../images/tshirt-kids-5.webp";
import img6 from"../../../images/tshirt-kids-6.webp";
import img7 from"../../../images/tshirt-kids-7.webp";
import img8 from"../../../images/tshirt-kids-8.webp";

const KidsTshirtPage= () =>{
const data = 
[
    { title: "Red tshirt",img: img1,price: "50$",quantity :30},
    { title: "Cool Pink",img: img2,price: "60$",quantity :40},
    { title: "England",img: img3,price: "50$",quantity :60},
    { title: "Black Tshirt",img: img4,price: "55$",quantity :50},
    { title: "Spoort tshirt",img: img5,price: "70$",quantity :50},
    { title: "Red Dark",img: img6,price: "50$",quantity :45},
    { title: "Black tshirt",img: img7,price: "85$",quantity :55},
    { title: "Light tshirt",img: img8,price: "60$",quantity :50},
]
return(
<div>
    {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
</div>);
}
export default  KidsTshirtPage;
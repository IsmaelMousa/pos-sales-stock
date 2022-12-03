import KidsItemsCard from "./KidsItemsCard";
import img1 from"../../../images/dress-kids-1.webp";
import img2 from"../../../images/dress-kids-2.webp";
import img3 from"../../../images/dress-kids-3.webp";
import img4 from"../../../images/dress-kids-4.webp";
import img5 from"../../../images/dress-kids-5.webp";
import img6 from"../../../images/dress-kids-6.webp";
import img7 from"../../../images/dress-kids-7.webp";
import img8 from"../../../images/dress-kids-8.webp";

const KidsDressPage= () =>{
const data = 
[
    { title: " floral Ruffle",img: img1,price: "100$",quantity :10},
    { title: "Solid Lantern",img: img2,price: "80$",quantity :28},
    { title:"Sequin Party",img: img3,price: "70$",quantity :18},
    { title: "long sleeves",img: img4,price: "95$",quantity :10},
    { title: "Ruffle Trim",img: img5,price: "50$",quantity :14},
    { title: "White dress",img: img6,price: "100$",quantity :12},
    { title: "Lively dress",img: img7,price: "45$",quantity :19},
    { title: "Colorful dress",img: img8,price: "60$",quantity :21},
]
return(
<div>
    {data.map((props) => {return (<KidsItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
</div>);
}
export default   KidsDressPage;
import ItemsCard from "./KidsItemsCard";
import img1 from"../../../images/jacket-kids-1.webp";
import img2 from"../../../images/jacket-kids-2.webp";
import img3 from"../../../images/jacket-kids-3.webp";
import img4 from"../../../images/jacket-kids-4.webp";
import img5 from"../../../images/jacket-kids-5.webp";
import img6 from"../../../images/jacket-kids-6.webp";
import img7 from"../../../images/jacket-kids-7.webp";
import img8 from"../../../images/jacket-kids-8.webp";

const KidsJacketPage= () =>{
    const data = 
    [
        { title: "Army jacket",img: img1,price: "150$",quantity :40},
        { title: "White Tiger",img: img2,price: "110$",quantity :30},
        { title: "Teddy Lined ",img: img3,price: "120$",quantity :20},
        { title: "Hoded Quilted",img: img4,price: "130$",quantity :25},
        { title: "Blue Jacket",img: img5,price: "140$",quantity :25},
        { title: "Heavy Blue",img: img6,price: "170$",quantity :30},
        { title: "Tinted light",img: img7,price: "190$",quantity :35},
        { title: "Green Scalfi",img: img8,price: "180$",quantity :25},
    ]
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default  KidsJacketPage;
import ItemsCard from "./MenItemsCard";
import img1 from"../../../images/short-men-1.webp";
import img2 from"../../../images/short-men-2.webp";
import img3 from"../../../images/short-men-3.webp";
import img4 from"../../../images/short-men-4.webp";
import img5 from"../../../images/short-men-5.webp";
import img6 from"../../../images/short-men-6.webp";
import img7 from"../../../images/short-men-7.webp";
import img8 from"../../../images/short-men-8.webp";

const MenShortPage= () =>{
    const data = 
    [
        { title: "Black & WhiteLine",img: img1, price: "50$",quantity :70},
        { title: "ThunderGG",img: img4,price: "30$",quantity :21},
        { title: "MaginVan",img: img3,price: "45$",quantity :33},
        { title: "Gray BAD",img: img5,price: "40$",quantity :115},
        { title: "OFF-White Calma",img: img2,price: "60$",quantity :10},
        { title: "Sky-FL",img: img6,price: "20$",quantity :93},
        { title: "Silver & White",img: img7,price: "50$",quantity :30},
        { title: "Black Onil",img: img8,price: "60$",quantity :25},
    ]
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default MenShortPage;
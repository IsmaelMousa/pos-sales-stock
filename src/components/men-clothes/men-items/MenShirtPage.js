import MenItemsCard from "./MenItemsCard";
import img1 from"../../../images/shirt-men-1.webp";
import img2 from"../../../images/shirt-men-2.webp";
import img3 from"../../../images/shirt-men-3.webp";
import img4 from"../../../images/shirt-men-4.webp";
import img5 from"../../../images/shirt-men-5.webp";
import img6 from"../../../images/shirt-men-6.webp";
import img7 from"../../../images/shirt-men-7.webp";
import img8 from"../../../images/shirt-men-8.webp";

const MenShirtPage= () =>{
    const data = 
    [
        { title: "Orange & Blue",img: img1,price: "115$",quantity :77},
        { title: "Brown & OFF-White",img: img4,price: "110$",quantity :53},
        { title: "Sky & Gray",img: img3,price: "115$",quantity :55},
        { title: "Green & White",img: img5,price: "120$",quantity :12},
        { title: "Sky & White",img: img2,price: "70$",quantity :100},
        { title: "Red & White",img: img6,price: "150$",quantity :93},
        { title: "Black & White",img: img7,price: "115$",quantity :25},
        { title: "Black Line& White",img: img8,price: "130$",quantity :30},
    ]
    return(
    <div>
        {data.map((props) => {return (<MenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default MenShirtPage;
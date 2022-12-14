import ItemsCard from "./MenItemsCard";
import img1 from"../../../images/coat-men-1.webp";
import img2 from"../../../images/coat-men-2.webp";
import img3 from"../../../images/coat-men-3.webp";
import img4 from"../../../images/coat-men-4.webp";
import img5 from"../../../images/coat-men-5.webp";
import img6 from"../../../images/coat-men-6.webp";
import img7 from"../../../images/coat-men-7.webp";
import img8 from"../../../images/coat-men-8.webp";

const MenCoatPage= () =>{
    const data = 
    [
        { title: "Brown LA",img: img1,price: "250$",quantity :77},
        { title: "Red & Black",img: img4,price: "110$",quantity :53},
        { title: "Black Nikki" ,img: img3,price: "300$",quantity :55},
        { title: "Brown Stalin",img: img5,price: "150$",quantity :12},
        { title: "Gray H&M",img: img2,price: "130$",quantity :100},
        { title: "Sliver Ganga",img: img6,price: "270$",quantity :93},
        { title: "Black Marin",img: img7,price: "320$",quantity :25},
        { title: "Army Ganga",img: img8,price: "200$",quantity :30},
    ]
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default MenCoatPage;
import ItemsCard from "./MenItemsCard";
import img1 from"../../../images/jacket-men-1.webp";
import img2 from"../../../images/jacket-men-2.webp";
import img3 from"../../../images/jacket-men-3.webp";
import img4 from"../../../images/jacket-men-4.webp";
import img5 from"../../../images/jacket-men-5.webp";
import img6 from"../../../images/jacket-men-6.webp";
import img7 from"../../../images/jacket-men-7.webp";
import img8 from"../../../images/jacket-men-8.webp";

const MenJacketPage= () =>{
    const data = 
    [
        { title: "Black Scalfi",img: img1,price: "70$",quantity :32},
        { title: "Black Heavy",img: img4,price: "200$",quantity :23},
        { title: "Blue Scalfi",img: img3,price: "70$",quantity :35},
        { title: "Black & Panther",img: img5,price: "350$",quantity :100},
        { title: "Black Wishi",img: img2,price: "200$",quantity :93},
        { title: "Green Bumb",img: img6,price: "400$",quantity :16},
        { title: "Off-White Heavy",img: img7,price: "270$",quantity :25},
        { title: "Pure Silver",img: img8,price: "100$",quantity :76},
    ]
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default MenJacketPage;
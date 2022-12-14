import MenItemsCard from "./MenItemsCard";
import img1 from"../../../images/pants-men-1.webp";
import img2 from"../../../images/pants-men-2.webp";
import img3 from"../../../images/pants-men-3.webp";
import img4 from"../../../images/pants-men-4.webp";
import img5 from"../../../images/pants-men-5.webp";
import img6 from"../../../images/pants-men-6.webp";
import img7 from"../../../images/pants-men-7.webp";
import img8 from"../../../images/pants-men-8.webp";

const MenPantsPage= () =>{
    const data = 
    [
        { title: "Gray Skini",img: img1,price: "130$",quantity :31},
        { title: "Blue OverLA",img: img4,price: "200$",quantity :52},
        { title: "Dark Cargo LS",img: img3,price: "250$",quantity :61},
        { title: "Black Cut",img: img5,price: "300$",quantity :71},
        { title: "Black Skini",img: img2,price: "130$",quantity :122},
        { title: "Sky POP",img: img6,price: "70$",quantity :13},
        { title: "Pure Blue",img: img7,price: "110$",quantity :25},
        { title: "Black OverLA",img: img8,price: "200$",quantity :30},
    ]
    return(
    <div>
        {data.map((props) => {return (<MenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default MenPantsPage;
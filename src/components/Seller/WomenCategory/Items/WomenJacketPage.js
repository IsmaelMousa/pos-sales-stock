import WomenItemsCard from "./WomenItemsCard"
import img1 from"../../../images/jacket-women-1.webp";
import img2 from"../../../images/jacket-women-2.webp";
import img3 from"../../../images/jacket-women-3.webp";
import img4 from"../../../images/jacket-women-4.webp";
import img5 from"../../../images/jacket-women-5.webp";
import img6 from"../../../images/jacket-women-6.webp";
import img7 from"../../../images/jacket-women-7.webp";
import img8 from"../../../images/jacket-women-8.webp";

const WomenJacketPage= () =>{
    const data = 
    [
        { title: "BLACK PADDED",img: img1,price: "330$",quantity :156},
        { title: "TAILORED",img: img4,price: "370$",quantity :71},
        { title: "TEXTURED FAUX" ,img: img3,price: "210$",quantity :16},
        { title: "TEDDY FUR BOMBER",img: img5,price: "150$",quantity :89},
        { title: "BREASTED",img: img2,price: "250$",quantity :134},
        { title: "TRIM PU BELTED",img: img6,price: "399$",quantity :67},
        { title: "CIRCLE QUILTED",img: img7,price: "260$",quantity :50},
        { title: "vintage jacket",img: img8,price: "120$",quantity :82},
    ]
    return(
    <div>
        {data.map((props) => {return (<WomenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default WomenJacketPage;
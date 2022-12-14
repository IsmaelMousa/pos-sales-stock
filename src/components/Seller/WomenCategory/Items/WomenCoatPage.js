import WomenItemsCard from "./WomenItemsCard"
import img1 from"../../../images/coat-women-1.webp";
import img2 from"../../../images/coat-women-2.webp";
import img3 from"../../../images/coat-women-3.webp";
import img4 from"../../../images/coat-women-4.webp";
import img5 from"../../../images/coat-women-5.webp";
import img6 from"../../../images/coat-women-6.webp";
import img7 from"../../../images/coat-women-7.webp";
import img8 from"../../../images/coat-women-8.webp";

const WomenCoatPage= () =>{
    const data = 
    [
        { title: "SQUARE QUILTED",img: img1,price: "200$",quantity :43},
        { title: "BOMBER JACKET",img: img4,price: "370$",quantity :46},
        { title: "BASIC JERSEY " ,img: img3,price: "340$",quantity :134},
        { title: "DETAIL GILET",img: img5,price: "270$",quantity :52},
        { title: "FUR COAT",img: img2,price: "299$",quantity :168},
        { title: "BRIGHT CHECK",img: img6,price: "350$",quantity :37},
        { title: "TEDDY FAUX",img: img7,price: "480$",quantity :125},
        { title: "TAILORED BLAZER",img: img8,price: "170$",quantity :82},
    ]
    return(
    <div>
        {data.map((props) => {return (<WomenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default WomenCoatPage;
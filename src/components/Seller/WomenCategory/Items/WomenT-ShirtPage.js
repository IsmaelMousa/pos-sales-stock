import WomenItemsCard from "./WomenItemsCard"
import img1 from"../../../images/tshirt-women-1.webp";
import img2 from"../../../images/tshirt-women-2.webp";
import img3 from"../../../images/tshirt-women-3.webp";
import img4 from"../../../images/tshirt-women-4.webp";
import img5 from"../../../images/tshirt-women-5.webp";
import img6 from"../../../images/tshirt-women-6.webp";
import img7 from"../../../images/tshirt-women-7.webp";
import img8 from"../../../images/tshirt-women-8.webp";

const WomenTShirtPage= () =>{
    const data = 
    [
        { title: "POCKET",img: img1,price: "210$",quantity :34},
        { title: "BROWN PETITE",img: img4,price: "300$",quantity :76},
        { title: "BEIGE SHIRT" ,img: img3,price: "480$",quantity :23},
        { title: "Striped Knitted",img: img5,price: "349$",quantity :86},
        { title: "BLACK FEATHER",img: img2,price: "250$",quantity :12},
        { title: "GREEN SEQUIN",img: img6,price: "370$",quantity :79},
        { title: "BLACK SATIN",img: img7,price: "450$",quantity :45},
        { title: "MONO PRINTED",img: img8,price: "299$",quantity :69},
    ]
    return(
    <div>
        {data.map((props) => {return (<WomenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default WomenTShirtPage;
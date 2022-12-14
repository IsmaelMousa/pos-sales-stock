import ItemsCard from "./MenItemsCard";
import img1 from"../../../images/ho-men-1.webp";
import img2 from"../../../images/ho-men-2.webp";
import img3 from"../../../images/ho-men-3.webp";
import img4 from"../../../images/ho-men-4.webp";
import img5 from"../../../images/ho-men-5.webp";
import img6 from"../../../images/ho-men-6.webp";
import img7 from"../../../images/ho-men-7.webp";
import img8 from"../../../images/ho-men-8.webp";

const MenSweaterPage= () =>{
    const data = 
    [
        { title: "Gray&Red",img: img1,price: "130$",quantity :25},
        { title: "Dark HashHash",img: img4,price: "200$",quantity :93},
        { title: "Black Hosea",img: img3,price: "150$",quantity :12},
        { title: "Black Vander",img: img5,price: "190$",quantity :55},
        { title: "Blue Hosea",img: img2,price: "150$",quantity :53},
        { title: "Off-White Niel",img: img6,price: "100$",quantity :100},
        { title: "Black 93",img: img7,price: "130$",quantity :30},
        { title: "Red ARY",img: img8,price: "200$",quantity :77},
    ]
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default MenSweaterPage;
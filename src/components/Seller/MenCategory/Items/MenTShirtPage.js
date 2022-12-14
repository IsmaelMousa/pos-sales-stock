import ItemsCard from "./MenItemsCard";
import img1 from"../../../images/tshirt-men-1.webp";
import img2 from"../../../images/tshirt-men-2.webp";
import img3 from"../../../images/tshirt-men-3.webp";
import img4 from"../../../images/tshirt-men-4.webp";
import img5 from"../../../images/tshirt-men-5.webp";
import img6 from"../../../images/tshirt-men-6.webp";
import img7 from"../../../images/tshirt-men-7.webp";
import img8 from"../../../images/tshirt-men-8.webp";

const MenTShirtPage= () =>{
    const data = 
    [
        { title: "Dark M",img: img1,price: "50$",quantity :17},
        { title: "White NAM",img: img4,price: "80$",quantity :54},
        { title: "Green LC13",img: img3,price: "40$",quantity :51},
        { title: "Oil&White",img: img5,price: "40$",quantity :112},
        { title: "White&RedLine",img: img2,price: "50$",quantity :10},
        { title: "Half White&Gray",img: img6,price: "60$",quantity :39},
        { title: "Orange Dragon",img: img7,price: "100$",quantity :35},
        { title: "Sky POP",img: img8,price: "60$",quantity :30},
    ]
    return(
    <div>
        {data.map((props) => {return (<ItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default MenTShirtPage;
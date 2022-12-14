import WomenItemsCard from "./WomenItemsCard"
import img1 from"../../../images/pant-women-1.webp";
import img2 from"../../../images/pant-women-2.webp";
import img3 from"../../../images/pant-women-3.webp";
import img4 from"../../../images/pant-women-4.webp";
import img5 from"../../../images/pant-women-5.webp";
import img6 from"../../../images/pant-women-6.webp";
import img7 from"../../../images/pant-women-7.webp";
import img8 from"../../../images/pant-women-8.webp";

const WomenPantPage= () =>{
    const data =
    [
        { title: "HIGH WAISTED",img: img1,price: "330$",quantity :54},
        { title: "PETITE TIE DYE",img: img4,price: "170$",quantity :87},
        { title: "PLUS EXTREME" ,img: img3,price: "210$",quantity :23},
        { title: "SHAPER LACE",img: img5,price: "285$",quantity :68},
        { title: "HIGH RISE",img: img2,price: "399$",quantity :23},
        { title: "PLUS SIZE ORGANIC",img: img6,price: "260$",quantity :74},
        { title: "BUTT SHAPER",img: img7,price: "310$",quantity :46},
        { title: "GIRL TALK",img: img8,price: "235$",quantity :57},
    ]
    return(
    <div>
        {data.map((props) => {return (<WomenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default WomenPantPage;
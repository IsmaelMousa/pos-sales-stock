import KidsItemsCard from "./KidsItemsCard";
import img1 from"../../../images/hodies-kids-1.webp";
import img2 from"../../../images/hodies-kids-2.webp";
import img3 from"../../../images/hodies-kids-3.webp";
import img4 from"../../../images/hodies-kids-4.webp";
import img5 from"../../../images/hodies-kids-5.webp";
import img6 from"../../../images/hodies-kids-6.webp";
import img7 from"../../../images/hodies-kids-7.webp";
import img8 from"../../../images/hodies-kids-8.webp";

const KidsHodiePage= () =>{
    const data = 
    [
        { title: "Cartoon Fees",img: img1,price: "70$",quantity :30},
        { title: "Gray cartoon",img: img2,price: "80$",quantity :10},
        { title: "Red Hodies",img: img3,price: "80$",quantity :12},
        { title: "Cartoon Fees",img: img4,price: "90$",quantity :25},
        { title: "Army Hoodie",img: img5,price: "65$",quantity :23},
        { title: "Plain blue",img: img6,price: "90$",quantity :30},
        { title: "XBox Hodie",img: img7,price: "100$",quantity :35},
        { title: "England Hodie",img: img8,price: "80$",quantity :15},
    ]
    return(
    <div>
        {data.map((props) => {return (<KidsItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default  KidsHodiePage;
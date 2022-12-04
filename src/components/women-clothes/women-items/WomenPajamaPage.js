import WomenItemsCard from "./WomenItemsCard"
import img1 from"../../../images/pajama-women-1.webp";
import img2 from"../../../images/pajama-women-2.webp";
import img3 from"../../../images/pajama-women-3.webp";
import img4 from"../../../images/pajama-women-4.webp";
import img5 from"../../../images/pajama-women-5.webp";
import img6 from"../../../images/pajama-women-6.webp";
import img7 from"../../../images/pajama-women-7.webp";
import img8 from"../../../images/pajama-women-8.webp";

const WomenPajamaPage= () =>{
    const data = 
    [
        { title: "FLOCKED SLOGAN ",img: img1,price: "369$",quantity :62},
        { title: "YORK SUPER",img: img4,price: "280$",quantity :29},
        { title: "BLACK TALL" ,img: img3,price: "340$",quantity :27},
        { title: "GREY RECYCLED",img: img5,price: "150$",quantity :33},
        { title: "BLACK TALL LEOPARD",img: img2,price: "210$",quantity :69},
        { title: "LOS ANGELES",img: img6,price: "320$",quantity :122},
        { title: "WHITE RECYCLED",img: img7,price: "380$",quantity :35},
        { title: "TONAL COLOUR BLOCK",img: img8,price: "220$",quantity :48},
    ]
    return(
    <div>
        {data.map((props) => {return (<WomenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>)})}
    </div>);
    }
export default WomenPajamaPage;
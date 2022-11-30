import SalesCard from "./SalesCard";
import img1 from"../../images/sales-1.webp";
import img2 from"../../images/sales-10.webp";
import img3 from"../../images/sales-3.webp";
import img4 from"../../images/sales-15.webp";
import img5 from"../../images/sales-5.webp";
import img6 from"../../images/sales-13.webp";
import img7 from"../../images/sales-7.webp";
import img8 from"../../images/sales-16.webp";
import img9 from"../../images/sales-9.webp";
import img10 from"../../images/sales-2.webp";
import img11 from"../../images/sales-11.webp";
import img12 from"../../images/sales-12.webp";
import img13 from"../../images/sales-6.webp";
import img14 from"../../images/sales-14.webp";
import img15 from"../../images/sales-4.webp";
import img16 from"../../images/sales-8.webp";

const SalesPage= () =>{
const data = 
[
    { title: "DarkBlue Kiki",img: img1,newPrice: "100$",prePrice:"130$",quantity :13},
    { title: "OverL Black",img: img2,newPrice: "70$",prePrice:"100$",quantity :21},
    { title: "Brown&Nick",img: img3,newPrice: "130$",prePrice:"150$",quantity :22},
    { title: "GrayPJ",img: img4,newPrice: "80$",prePrice:"90$",quantity :10},
    { title: "BlackHelp",img: img5,newPrice: "60$",prePrice:"85$",quantity :66},
    { title: "Flower LA",img: img6,newPrice: "50$",prePrice:"70$",quantity :31},
    { title: "Orange Queen",img: img7,newPrice: "150$",prePrice:"200$",quantity :21},
    { title: "Pinker MO",img: img8,newPrice: "30$",prePrice:"55$",quantity :42},
    { title: "Blue Tall",img: img9,newPrice: "55$",prePrice:"70$",quantity :31},
    { title: "Black 98",img: img10,newPrice: "100$",prePrice:"120$",quantity :21},
    { title: "Black Mar",img: img11,newPrice: "70$",prePrice:"110$",quantity :42},
    { title: "Dark OIL21",img: img12,newPrice: "190$",prePrice:"230$",quantity :31},
    { title: "Gray&VerLLa",img: img13,newPrice: "40$",prePrice:"70$",quantity :21},
    { title: "Black&PAP",img: img14,newPrice: "200$",prePrice:"260$",quantity :42},
    { title: "GrayLong",img: img15,newPrice: "60$",prePrice:"95$",quantity :42},
    { title: "Fitch HOLY",img: img16,newPrice: "50$",prePrice:"70$",quantity :42},
]
return(<div>{data.map((props) =>{return (<SalesCard title={props.title} imgsrc={props.img} newPrice={props.newPrice} quantity={props.quantity} prePrice={props.prePrice}/>)})}</div>);}

export default SalesPage;
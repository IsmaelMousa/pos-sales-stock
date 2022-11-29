import SalesCard from "./SalesCard";
import img1 from"../../images/Black-Sweat-Pants.jpg";
import img2 from"../../images/Cheino-brown-pants.webp";
import img3 from"../../images/Dark-Cargo-pants.jpg";
import img4 from"../../images/Gray-formal-pants.jpg";
import img5 from"../../images/Jeans-1.webp";
import img6 from"../../images/Off-White-Pants.jpg";
import img7 from"../../images/White-Pants.webp";
import img8 from"../../images/Green-Sweat.jpg";
import img9 from"../../images/Off-White-Pants.jpg";
import img10 from"../../images/White-Pants.webp";
import img11 from"../../images/Green-Sweat.jpg";
import img12 from"../../images/Off-White-Pants.jpg";
import img13 from"../../images/White-Pants.webp";
import img14 from"../../images/Green-Sweat.jpg";
import img15 from"../../images/Green-Sweat.jpg";
const SalesPage= () =>{
const data = 
[
    { title: "Black Sweat", img:  img1, newPrice: "50$", prePrice:"70$",quantity :13},
    { title: "Beige Cheino", img:  img2, newPrice: "50$", prePrice:"70$",quantity :21},
    { title: "Dark Cargo" , img:  img3 , newPrice: "50$", prePrice:"70$",quantity :22},
    { title: "Gray Formal", img:  img4 , newPrice: "50$", prePrice:"70$",quantity :10},
    { title: "Blue Jeans", img:  img5 , newPrice: "50$", prePrice:"70$",quantity :66},
    { title: "Off-White Cheino", img:  img6 , newPrice: "50$", prePrice:"70$",quantity :31},
    { title: "White Jeans", img:  img7 , newPrice: "50$", prePrice:"70$",quantity :21},
    { title: "Green Sweat", img:  img8 , newPrice: "50$", prePrice:"70$",quantity :42},
    { title: "Off-White Cheino", img:  img9 , newPrice: "50$", prePrice:"70$",quantity :31},
    { title: "White Jeans", img:  img10 , newPrice: "50$", prePrice:"70$",quantity :21},
    { title: "Green Sweat", img:  img11 , newPrice: "50$", prePrice:"70$",quantity :42},
    { title: "Off-White Cheino", img:  img12 , newPrice: "50$", prePrice:"70$",quantity :31},
    { title: "White Jeans", img:  img13 , newPrice: "50$", prePrice:"70$",quantity :21},
    { title: "Green Sweat", img:  img14 , newPrice: "50$", prePrice:"70$",quantity :42},
    { title: "Green Sweat", img:  img15 , newPrice: "50$", prePrice:"70$",quantity :42},
]
return (
    <div>
    {
        data.map((props) => {
        return (
        <SalesCard title={props.title} imgsrc={props.img} newPrice={props.newPrice} quantity={props.quantity} prePrice={props.prePrice}/>
        )
    }
    )
    }
    </div>
);
}
export default SalesPage;
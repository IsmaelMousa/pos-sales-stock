import MenSweaterCard from "./MenSweaterCard";
import img1 from"../../../images/Black-Sweat-Pants.jpg";
import img2 from"../../../images/Cheino-brown-pants.webp";
import img3 from"../../../images/Dark-Cargo-pants.jpg";
import img4 from"../../../images/Gray-formal-pants.jpg";
import img5 from"../../../images/Jeans-1.webp";
import img6 from"../../../images/Off-White-Pants.jpg";
import img7 from"../../../images/White-Pants.webp";
import img8 from"../../../images/Green-Sweat.jpg";

const MenSweaterPage= () =>{

const data = [
    { title: "Black Sweat", img:  img1, price: "50$",quantity :77},
    { title: "Beige Cheino", img:  img4, price: "110$",quantity :53},
    { title: "Dark Cargo" , img:  img3 ,price: "80$",quantity :55},
    { title: "Gray Formal", img:  img5 ,price: "75$",quantity :12},
    { title: "Blue Jeans", img:  img2 ,price: "35$",quantity :100},
    {  title: "Off-White Cheino", img:  img6 ,price: "50$",quantity :93},
    {  title: "White Jeans", img:  img7 ,price: "200$",quantity :25},
    {  title: "Green Sweat", img:  img8 ,price: "60$",quantity :30},
]
return (
    <div>
    {
        data.map((props) => {
        return (
        <MenSweaterCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity}/>
        )
    }
    )
    }
    </div>
);
}

export default MenSweaterPage;
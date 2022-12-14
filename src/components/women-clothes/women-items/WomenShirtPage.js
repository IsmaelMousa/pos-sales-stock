import WomenItemsCard from "./WomenItemsCard"
import img1 from "../../../images/shirt-women-1.webp";
import img2 from "../../../images/shirt-women-2.webp";
import img3 from "../../../images/shirt-women-3.webp";
import img4 from "../../../images/shirt-women-4.webp";
import img5 from "../../../images/shirt-women-5.webp";
import img6 from "../../../images/shirt-women-6.webp";
import img7 from "../../../images/shirt-women-7.webp";
import img8 from "../../../images/shirt-women-8.webp";

const WomenShirtPage = () => {
    const data =
        [
            { title: "BROWN", img: img1, price: "210$", quantity: 18 },
            { title: "SATIN LEOPARD", img: img4, price: "370$", quantity: 83 },
            { title: "BEIGE PLUS", img: img3, price: "320$", quantity: 158 },
            { title: "ZEBRA COLD", img: img5, price: "150$", quantity: 40 },
            { title: "BLACK HIGH", img: img2, price: "300$", quantity: 25 },
            { title: "GREEN PLUS", img: img6, price: "430$", quantity: 69 },
            { title: "RED BOW", img: img7, price: "360$", quantity: 84 },
            { title: "BEIGE SHEER", img: img8, price: "350$", quantity: 42 },
        ]
    return (
        <div>
            {data.map((props) => { return (<WomenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity} />) })}
        </div>);
}
export default WomenShirtPage;
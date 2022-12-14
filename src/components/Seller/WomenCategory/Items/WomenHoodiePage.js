import WomenItemsCard from "./WomenItemsCard"
import img1 from "../../../images/hoodie-women-1.webp";
import img2 from "../../../images/hoodie-women-2.webp";
import img3 from "../../../images/hoodie-women-3.webp";
import img4 from "../../../images/hoodie-women-4.webp";
import img5 from "../../../images/hoodie-women-5.webp";
import img6 from "../../../images/hoodie-women-6.webp";
import img7 from "../../../images/hoodie-women-7.webp";
import img8 from "../../../images/hoodie-women-8.webp";

const WomenHoodiePage = () => {
    const data =
        [
            { title: "GRAY FLOCKED", img: img1, price: "450$", quantity: 134 },
            { title: "Dark residential", img: img4, price: "280$", quantity: 54 },
            { title: "TIE DYE OFFICIAL", img: img3, price: "349$", quantity: 168 },
            { title: "DECEMBER 25TH", img: img5, price: "230$", quantity: 57 },
            { title: "VARSITY SWEATER", img: img2, price: "300$", quantity: 34 },
            { title: "NEW YORK SUPER", img: img6, price: "420$", quantity: 25 },
            { title: "PINK MULTI", img: img7, price: "160$", quantity: 23 },
            { title: "PHOENIX PRINTED", img: img8, price: "410$", quantity: 78 },
        ]
    return (
        <div>
            {data.map((props) => { return (<WomenItemsCard title={props.title} imgsrc={props.img} price={props.price} quantity={props.quantity} />) })}
        </div>);
}
export default WomenHoodiePage;
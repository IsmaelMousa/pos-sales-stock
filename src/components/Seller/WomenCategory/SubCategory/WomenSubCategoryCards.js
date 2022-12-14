import SubCategoryCard from "./WomenSubCategoryCard";
import img1 from "../../../images/shirt-women-sub.webp";
import img2 from "../../../images/hoodie-women-sub.webp";
import img3 from "../../../images/jacket-women-sub.webp";
import img4 from "../../../images/t-shirt-women-sub.webp";
import img5 from "../../../images/pant-women-sub.webp";
import img6 from "../../../images/coat-women-sub.webp";
import img7 from "../../../images/dress-women-sub.webp";
import img8 from "../../../images/pyjama-women-sub.webp";

const WomenSubcategoryCards = () => {

  const data = [
    { title: "Shirt", img: img1 },
    { title: "T-Shirts", img: img4 },
    { title: "Jacket", img: img3 },
    { title: "Dresses", img: img7 },
    { title: "Pants", img: img5 },
    { title: "Hoodies", img: img2 },
    { title: "Coats", img: img6 },
    { title: "Pyjamas", img: img8 },
  ]
  return (
    <div>
      {
        data.map((props) => {
          return (
            <SubCategoryCard title={props.title} imgsrc={props.img} />
          )
        }
        )
      }
    </div>
  );
}

export default WomenSubcategoryCards;
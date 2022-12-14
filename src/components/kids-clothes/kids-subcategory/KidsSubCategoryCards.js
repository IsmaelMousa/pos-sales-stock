import KidsSubCategoryCard from './KidsSubCategoryCard';
import  './KidsSubCategoryCards.css';

import img1 from "../../../images/hat-kids-sub.webp";
import img2 from "../../../images/hoodie-kids-sub.webp";
import img3 from "../../../images/jacket-kids-sub.webp";
import img4 from "../../../images/t-shirt-kids-sub.webp";
import img5 from "../../../images/pant-kids-sub.webp";
import img6 from "../../../images/short-kids-sub.webp";
import img7 from "../../../images/dress-kids-sub.webp";
import img8 from "../../../images/pyjama-kids-sub.webp";
const KidsSubCategoryCards = () => {
  const data = [
    { title: "Hat", img: img1 },
    { title: "Hoodies", img: img2 },
    { title: "Jackets", img: img3 },
    { title: "T-Shirts", img: img4 },
    { title: "Pants", img: img5 },
    { title: "Shorts", img: img6 },
    { title: "Dresses", img: img7 },
    { title: "Pyjamas", img: img8 },
  ]
  return (
    <div>
      {
        data.map((item) => {
          return (
            <KidsSubCategoryCard title={item.title} img={item.img} />
          )
        }
        )
      }
    </div>


  );
}

export default KidsSubCategoryCards;

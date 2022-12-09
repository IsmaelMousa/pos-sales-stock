import MenSubCategoryCard from "../men-subcategory/MenSubCategoryCard";
import img1 from "../../../images/coat-men-1.webp";
import img2 from "../../../images/jacket-men-sub.webp";
import img3 from "../../../images/t-shirt-men-sub.webp";
import img4 from "../../../images/coat-men-1.webp";
import img5 from "../../../images/coat-men-1.webp";
import img6 from '../../../images/coat-men-1.webp';
import img7 from '../../../images/coat-men-1.webp';
import img8 from '../../../images/coat-men-1.webp';

const MenSubCategoryCards = () => {
  const data = [


    { title: "Coat", img: img2 },
    { title: "Jacket", img: img3 },
    { title: "T-Shirt", img: img4 },
    { title: "Pant", img: img5 },
    { title: "Sweater", img: img7 },
    { title: "Shirt", img: img8 },
    { title: "Scarf", img: img1 },
    { title: "Short", img: img6 },

  ]
  return (


    <div>
      {
        data.map((props) => {
          return (
            <MenSubCategoryCard title={props.title} imgsrc={props.img} />

          )
        }
        )
      }

    </div>
  );

}
export default MenSubCategoryCards;
import WomenSubCategoryCards from "./WomenSubCategoryCards";
import img1 from"../images/scarf.png";
import img2 from"../images/hodie.png";
import img3 from"../images/jacket.png";
import img4 from"../images/t-shirt.png";
import img5 from"../images/pant.png";
import img6 from"../images/short.png";
import img7 from"../images/dress.png";
import img8 from"../images/p.png";

const WomenSubcategoryCard= () =>{

const data = [
  { title: "Scarf", img:  img1  },
  { title: "T-Shirts", img:  img4},
  { title: "Jacket", img:  img3 },
  { title: "Pants ", img:  img5 },
  { title: "Hoodie", img:  img2 },
  {  title: "Shorts", img:  img6 },
  {  title: "Dresses", img:  img7 },
  {  title: "Pajamas", img:  img8 },
]
  return (
    <div>
      {
      data.map((props) => {
        return (
          <WomenSubCategoryCards title={props.title} imgsrc={props.img}/>
          )
      }
      )
    }
  </div>
  );
}

export default WomenSubcategoryCard;
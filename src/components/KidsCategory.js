import KidsSubCategory from "./KidsSubCategory";
import img1 from '../images/scarfkids.png'
import img2 from '../images/hodeiskids.png'
import img3 from '../images/jacketkids.png'
import img4 from '../images/tshirtkids.png'
import img5 from '../images/pantKidss.png'
import img6 from '../images/shortkids.png'
import img7 from '../images/dresskids.png'
import img8 from '../images/pejamaKidss.png'
const KidsCategory=()=> {
  const data = [
    { title: "Scarf", img: img1 },
    { title: "Hoodie", img: img2 },
    { title: "Jacket", img: img3 },
    { title: "T-Shirts", img: img4 },
    { title: "Pants ", img: img5 },
    { title: "Shorts", img: img6 },
    { title: "Dresses", img: img7 },
    { title: "Pajamas", img: img8 },
  ]
  return (
    <div>
          {
            data.map((item) => {
              return (
                <KidsSubCategory title={item.title} img={item.img}>
                </KidsSubCategory>
              )
            }
            )
          }
        </div>
    

  );
}

export default KidsCategory;

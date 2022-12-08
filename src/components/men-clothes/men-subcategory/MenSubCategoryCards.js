import MenSubCategoryCard from "./MenSubCategoryCard";
import img1 from"../../../images/coat-men-sub.webp";
import img2 from"../../../images/jacket-men-sub.webp";
import img3 from"../../../images/shirt-men-sub.webp";
import img4 from"../../../images/t-shirt-men-sub.webp";
import img5 from"../../../images/pant-men-sub.webp";
import img6 from"../../../images/sweater-men-sub.webp";
import img7 from"../../../images/pyjama-men-sub.webp"
import img8 from"../../../images/short-men-sub.webp";


const MenSubCategoryCards=()=>{
const data = [


{title:"Coat",img: img1},
{title:"Jacket",img: img2},
{title:"Shirt",img: img3},
{title:"T-Shirt",img: img4},
{title:"Pant",img: img5},
{title:"Sweater",img: img6},
{title:"Pyjama",img: img7},
{title:"Short",img: img8},

]
return (
   
    
<div>
  {
    data.map((props)=>{
      return(
        <MenSubCategoryCard title={props.title} imgsrc={props.img}/>
          
      )
    }
    )
}
 
   </div>
  );
  
}
export default MenSubCategoryCards;
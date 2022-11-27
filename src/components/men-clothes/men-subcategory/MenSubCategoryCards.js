import MenSubCategoryCard from '../components/MenSubCategotyCard';
import img1 from'../images/scarf.png';
import img2 from'../images/Coat.png';
import img3 from'../images/jacket.png';
import img4 from'../images/t-shirt.png';
import img5 from'../images/pant.png';
import img6 from'../images/short.png';
import img7 from'../images/Sweater.png';
import img8 from'../images/Shirt.jpg';


const MenSubCategoryCards=()=>{
const data = [

   
{title:"Coat",img: img2},
{title:"Jacket",img: img3},
{title:"T-Shirt",img: img4},
{title:"Pant",img: img5},
{title:"Sweater",img: img7},
{title:"Shirt",img: img8},
{title:"Scarf",img: img1},
{title:"Short",img: img6},

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
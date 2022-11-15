import React,{ Component} from "react";
import Card from "./women-sub-category";
import img1 from"../images/scarf.png";
import img2 from"../images/hodie.png";
import img3 from"../images/jacket.png";
import img4 from"../images/t-shirt.png";
import img5 from"../images/pant.png";
import img6 from"../images/short.png";
import img7 from"../images/dress.png";
import img8 from"../images/p.png";


class Cards  extends Component{

   render(){
    return(
<section  className="container-fluid d-flex justify-content-center">
    <div className="row col-mx-4">
        <Card imgsrc={img1} title="Scarf"/>
        <Card imgsrc={img2} title="Hoodie"/>
        <Card imgsrc={img3} title="Jacket"/>
        <Card imgsrc={img4} title="T-Shirts"/>
        <Card imgsrc={img5}title="Pants "/>
        <Card imgsrc={img6} title="Shorts"/>
        <Card imgsrc={img7} title="Dresses"/>
        <Card imgsrc={img8} title="Pajamas"/>
        

        </div>
    </section>
     );
   }

} 
export default Cards;
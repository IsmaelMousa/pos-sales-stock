import "./ItemsCard.css";
const ItemsCard = (props) => {
  function addToCart(){
    console.log("test")
    var cart=JSON.parse(localStorage.getItem("cart"))
    if(!cart){
      cart=[]
    }
    var itemExist=cart.find((item)=>item.itemId==props.id)
    if(itemExist){
      itemExist.quantity++
    }
    else
    cart.push({
      itemId:props.id,
      itemName:props.title,
      itemPrice:props.price,
      quantity:1

    })
    localStorage.setItem("cart",JSON.stringify(cart))
  }
   return (
    <div className="card text-center" id="card-item">
      <div className="overflow">
        <img src={props.imgsrc} alt="..." className="card-img-top" id="card-img-top-item"/>
      </div>
      <div className="card-body text-dark" id="card-body-item">
        <h4 className="card-title" id="card-title-item"> {props.title}</h4>
        <h5 className="price" id="price-item">{props.price}</h5>
        <h6 className="quantity" id="quantity-item">RQ : {props.quantity}</h6>
         <button type='button' className="d-grid col-4 mx-auto" id="b2" onClick={addToCart}>
         Pick Up
        </button>
      </div>
    </div>
  );
};
export default ItemsCard;
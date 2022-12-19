import "./ItemsCard.css";
const ItemsCard = (props) => {
  return (
    <div className="card text-center" id="card-item">
      <div className="overflow">
        <img src={props.imgsrc} alt="..." className="card-img-top" id="card-img-top-item"/>
      </div>
      <div className="card-body text-dark" id="card-body-item">
        <h4 className="card-title" id="card-title-item"> {props.title}</h4>
        <h5 className="price" id="price-item">{props.price}</h5>
        <h6 className="quantity" id="quantity-item">RQ : {props.quantity}</h6>
         <button type='button' className="d-grid col-4 mx-auto" id="b2" >
         Pick Up
        </button>
      </div>
    </div>
  );
};
export default ItemsCard;
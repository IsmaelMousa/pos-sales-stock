import "./ItemsCard.css";
const ItemsCard = (props) => {
  return (
    <div className="card ">
      <div className="overflow">
        <img src={props.imgsrc} alt="pants" className="card-img-top" />
      </div>
      <div className="card-body text-dark ">
        <h4 className="card-title"> {props.title}</h4>
        <h5 className="price">{props.price}</h5>
        <h6 className="quantity">{props.quantity}</h6>
         <button type='button' className="d-grid col-4 mx-auto" id="b3" >
          <b  className='text3'>Pick Up</b>
        </button>
      </div>
    </div>
  );
};
export default ItemsCard;

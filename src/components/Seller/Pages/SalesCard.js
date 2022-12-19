import'./SalesCard.css';

const SalesCard= (props) =>{
    return (
    <div className="card" id="card-sale">
        <div className="overflow">
            <img className="card-img-top" id="card-img-top-sale" src={props.imgsrc} alt="..."/>
        <div className='card-body text-dark' id="card-body-sale">
            <h4 className='card-title' id="card-title-sale"> {props.title}</h4>
            <h5  className="card-text" id="card-text-sale">{props.newPrice} <del className='pre-price'>{props.prePrice}</del></h5>
            <h6 className='quantity' id="quantity-sale">RQ : {props.quantity}</h6>
            <button type='button' className="d-grid col-4 mx-auto" id="b3" >
          Pick Up
          </button>
        </div> 
        </div>    
        </div>       
       );
}

export default SalesCard;
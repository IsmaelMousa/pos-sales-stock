import'./SalesCard.css';

const SalesCard= (props) =>{
    return (
    <div className="card  ">
        <div className="overflow">
            <img className="card-img-top" src={props.imgsrc} alt="..."/>
        <div className='card-body text-dark '>
            <h4 className='card-title'> {props.title}</h4>
            <h5  className="card-text">{props.newPrice}    <del className='pre-price'>{props.prePrice}</del></h5>
            <h6 className='quantity'>{props.quantity}</h6>
            <button type='button' className="d-grid col-4 mx-auto" id="b3" >
          <b className='text3'>Pick Up</b>
          </button>
        </div> 
        </div>    
        </div>       
       );    
}

export default SalesCard;
import'./SalesCard.css';

const SalesCard= (props) =>{
    return (
    <div className="card text-center ">
        <div className="overflow">
            <img src={props.imgsrc} alt="..." className='card-img-top'/>
        </div>
        <div className='card-body text-dark '>
            <h4 className='card-title'> {props.title}</h4>
            <h5  className="card-text">{props.newPrice}<del>{props.prePrice}</del></h5>
            <h6 className='h6'>{props.quantity}</h6>
            <a href='#' className='btn btn-outline'><b>Pick Up</b></a>
        </div>            
        </div>);    
}

export default SalesCard;
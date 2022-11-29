import"./MenItemsCard.css";

const MenScarfCard= (props) =>{
    return (
        <div className="card text-center"> 
            <div className="overflow">
                <img src={props.imgsrc} alt="pants" className='card-img-top'/>
            </div>
<div className='card-body text-dark '>
<h4 className='card-title'> {props.title}</h4>
<h5 className='h5'>{props.price}</h5>
<h6 className='h6'>{props.quantity}</h6>
<a href='#' className='btn btn-outline'><b> GO </b> </a>
</div>            
</div>);    
}

export default MenScarfCard;
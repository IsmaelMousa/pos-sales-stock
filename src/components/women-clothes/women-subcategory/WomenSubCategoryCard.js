import React from 'react';
import'./WomenSubCategoryCards.css';

const WomenSubCategoryCard= (props) =>{
    return (
        <div className="card text-center "> 
            <div className="overflow">
                <img src={props.imgsrc} alt="..." className='card-img-top'/>
            </div>
<div className='card-body text-dark '>
<h4 className='card-title'> {props.title}</h4>
<a href='#' className='btn btn-outline'><b> GO </b> </a>



    </div>            
        </div>);
    
}

export default WomenSubCategoryCard;
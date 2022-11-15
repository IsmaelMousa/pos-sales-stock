import React from 'react';
import'./sub-category-cards.css';

const Card= props =>{
    return (
        <div className="card text-center"> 
            <div className="overflow">
                <img src={props.imgsrc} alt="image 1" className='card-img-top'/>
            </div>
<div className='card-body text-dark'>
<h4 className='card-title'> {props.title}</h4>
<a href='#' className='btn btn-outline-dark'> GO </a>



    </div>            
        </div>
    );
}
export default Card;
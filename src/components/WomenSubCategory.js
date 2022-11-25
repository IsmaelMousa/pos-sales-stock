import React from 'react';
import'./WomenSubCategory.css';

const WomenSubCategory= (props) =>{
    return (
        <div className="card text-center "> 
            <div className="overflow">
                <img src={props.imgsrc} alt="image" className='card-img-top'/>
            </div>
<div className='card-body text-dark '>
<h4 className='card-title'> {props.title}</h4>
<a href='#' className='btn btn-outline'> GO </a>



    </div>            
        </div>);
    
}

export default WomenSubCategory;
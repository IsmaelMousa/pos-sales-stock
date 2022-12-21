import React from 'react';
import "./SubCategoryCard.css";
import { Link } from 'react-router-dom';

const SubCategoryCard = (props) => {
    return (
       
        <div className="card text-center" id="card-category">
            <div className="overflow">   
            <button className='ClickImage'>
                <Link to={"/items/"+props.category+"/" + props.subcategory} className='text3'> <img src={props.imgsrc} alt="..." className='card-img-top' id="card-img-top-category"/> </Link>
                </button>
                <div className='card-body' id="card-body-category">
                    <h4 className='card-title' id="card-title-category"> {props.subcategory}</h4>
                   
                </div>
            </div>
        </div>
    );
}
export default SubCategoryCard;
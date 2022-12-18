import React from 'react';
import "./SubCategoryCard.css";
import { Link } from 'react-router-dom';

const SubCategoryCard = (props) => {
    return (
       
        <div className="card text-center">
            <div className="overflow">   
            <button className='ClickImage'>
                <Link to={"/items?category="+props.category+"&subcategory=" + props.subcategory}   className='text3'> <img src={props.imgsrc} alt="..." className='card-img-top' /> </Link>
                </button>
                <div className='card-body '>
                    <h4 className='card-title'> {props.subcategory}</h4>
                    <button type='button' className="btn btn-outline" id="b3" >
                        <Link to={"/items?category="+props.category+"&subcategory=" + props.subcategory}   className='text3'> Go </Link>
                    </button>
                </div>
            </div>
        </div>
       
    );
}
export default SubCategoryCard;
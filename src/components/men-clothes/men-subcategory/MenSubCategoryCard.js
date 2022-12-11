import React from 'react';
import "./MenSubCategoryCard.css";
import { Link } from 'react-router-dom';

const MenSubCategoryCard = (props) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="image" className='card-img-top' />
            </div>
            <div className='card-body text-dark'>
                <h4 className='card-title'> {props.title}</h4>
                <button>
                    <Link to={"/Men/" + props.title}  ><b> Go </b></Link>
                </button>



            </div>
        </div>
    );
}
export default MenSubCategoryCard;
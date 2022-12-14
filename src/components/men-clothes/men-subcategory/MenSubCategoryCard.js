import React from 'react';
import "./MenSubCategoryCard.css";
import { Link } from 'react-router-dom';

const MenSubCategoryCard = (props) => {
    return (
        <div className="card text-center">
            <div className="overflow">
                <img src={props.imgsrc} alt="..." className='card-img-top' />
                <div className='card-body '>
                    <h4 className='card-title'> {props.title}</h4>
                    <button type='button' className="btn btn-outline" id="b3" >
                        <Link to={"/Men/" + props.title}  ><b className='text3'> Go </b></Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default MenSubCategoryCard;
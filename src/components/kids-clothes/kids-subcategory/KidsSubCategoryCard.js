import React from 'react';
import { Link } from 'react-router-dom';
import './KidsSubCategoryCards.css';
const KidsSubCategoryCard = (props) => {
  return (
    <div className="card text-center">
        <div className="overflow">
      <img src={props.img} className="card-img" alt="..." />
      <div className='card-body  '>
        <h4 className='card-title'> {props.title}</h4>
        <button type='button' className="btn btn-outline" id="b1" >
          <Link to={"/kids/" + props.title}> 
          <b className="text"> Go </b>
          </Link>
        </button>
      </div>
      </div>
    </div>

  );
}
export default KidsSubCategoryCard;
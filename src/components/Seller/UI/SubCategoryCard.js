import React from 'react';
import { Link } from 'react-router-dom';
import './KidsSubCategoryCards.css';
const SubCategoryCard = (props) => {
  return (
    <div className="card">
        <div className="overflow">
      <img src={props.img} className="card-img-top" alt="..." />
      <div className='card-body  '>
        <h4 className='card-title'> {props.title}</h4>
        <button type='button' className="d-grid col-4 mx-auto" id="b3" >
                    <Link to={"/kids/" + props.title}> 
          <b className="text3"> Go </b>
          </Link>
        </button>
      </div>
      </div>
    </div>

  );
}
export default SubCategoryCard;
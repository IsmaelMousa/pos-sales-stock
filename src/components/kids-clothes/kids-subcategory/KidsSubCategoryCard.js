import React from 'react';
import { Link } from 'react-router-dom';
import "./KidsSubCategoryCards.css";
const KidsSubCategoryCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} class="card-img-top" alt="..." />
      <div class="card-body">
        <h4 className='card-title'> {props.title}</h4>
        <button>
          <Link to={"/kids/" + props.title}  ><b> Go </b></Link>
        </button>
      </div>
    </div>


  );
}
export default KidsSubCategoryCard;
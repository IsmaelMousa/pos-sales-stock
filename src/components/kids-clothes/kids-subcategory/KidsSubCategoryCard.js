import React from 'react';
import './KidsSubCategoryCard.css'
const KidsSubCategoryCard = (props) => {
  return (         
          <div className="card">
            <img src={props.img} class="card-img-top" alt="..." />
            <div class="card-body">
            <h4 className='card-title'> {props.title}</h4>
              <button type='button' className='btn btn-outline'> <b> Go</b></button>
            </div>
          </div>
      
     
  );
}
export default KidsSubCategoryCard;
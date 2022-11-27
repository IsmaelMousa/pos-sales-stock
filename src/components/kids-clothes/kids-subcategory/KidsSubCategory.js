import React from 'react';
import './KidsSubCategory.css'
const KidsSubCategory = (props) => {
  return (         
          <div className="card">
            <img src={props.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{props.title}</h5>
              <button type='button' className='btn btn-outline-dark'>Go</button>
            </div>
          </div>
      
     
  );
}
export default KidsSubCategory;
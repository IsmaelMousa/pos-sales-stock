import SubCategoryCard from "./SubCategoryCard";
import SubCategoriesData from "./SubCategoriesData";
import { useEffect } from "react";
import { useParams } from "react-router-dom";


const SubCategoryCards = () => {
  let  results = useParams();
  const url = new URL(window.location.href);

  var data=SubCategoriesData.filter((item)=>item.category=== url.searchParams.get('category'));
  useEffect(()=>{
      data = SubCategoriesData.filter((item)=>item.category=== url.searchParams.get('category'))
  },[results])
   
  return (

    <div>
      {
        data[0].subcategories.map((props) => {
          return (
            <SubCategoryCard subcategory={props.name} imgsrc={props.image} category={data[0].category} />

          )
        }
        )
      }

    </div>
  );

}
export default SubCategoryCards;
import SubCategoryCard from "./SubCategoryCard";
import SubCategoriesData from "./SubCategoriesData";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
const SubCategoryPage = () => {
  let  {category} = useParams();
  var data=SubCategoriesData.filter((item)=>item.category=== category);
  useEffect(()=>{
      data = SubCategoriesData.filter((item)=>item.category=== category)
  },[category])
   
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
export default SubCategoryPage;
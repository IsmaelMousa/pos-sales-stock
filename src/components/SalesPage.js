import SalesItemCard from './SalesItemCard';
import './SalesItemCard.css'
import image1 from'../images/pexels-el-sultan-3220386.jpg'
import image2 from'../images/pexels-lloyd-james-12113101.jpg'
import image3 from'../images/pexels-shvets-production-6974955.jpg'
import image4 from'../images/pexels-ahmed-samir-12024071.jpg'
import image5 from'../images/pexels-monstera-6311142.jpg'
import image6 from'../images/pexels-monstera-6311150.jpg'
import image7 from'../images/pexels-monstera-6311588.jpg'
import image8 from'../images/pexels-monstera-6311629.jpg'
import image9 from'../images/pexels-monstera-6311647.jpg'
import image10 from'../images/pexels-mart-production-9558243.jpg'
import image11 from'../images/pexels-evg-kowalievska-3993234.jpg'
import image12 from'../images/pexels-raul-reynoso-1018911.jpg'


const SalesPage=()=> 
{
  return(
    <div className="container-fluid d-flex justify-content-center">
      <div className='row '>
        <div className='col-md-3 pt-3'>
          <SalesItemCard Name="Tshirt " prePrice="1200" newPrice="6000" remainingQuantity="150" imageSrc={image1} />
        </div>
        <div className='col-md-3 pt-3'>
          <SalesItemCard Name="Oversize Shirt" prePrice="800" newPrice="400" remainingQuantity="15" imageSrc={image2} />
        </div>
        <div className='col-md-3 pt-3'>
          <SalesItemCard Name="Hoodie" prePrice="550" newPrice="300" remainingQuantity="66" imageSrc={image3} />
        </div>
        <div className='col-md-3 pt-3'>
          <SalesItemCard Name="Shirt" prePrice="200" newPrice="75" remainingQuantity="143" imageSrc={image4} />
        </div>
        <div className='col-md-3 pt-3'>
          <SalesItemCard Name="Hoodie" prePrice="650" newPrice="400" remainingQuantity="80" imageSrc={image5} />
        </div>
        <div className='col-md-3 pt-3'>
          <SalesItemCard Name="Hoodie" prePrice="750" newPrice="460" remainingQuantity="53" imageSrc={image6} />
        </div>
        
          <div className='col-md-3 pt-3'>
            <SalesItemCard Name="Tshirt" prePrice="330" newPrice="300" remainingQuantity="79" imageSrc={image7} />
          </div>
          <div className='col-md-3 pt-3'>
            <SalesItemCard Name="Hoodie" prePrice="1000" newPrice="879" remainingQuantity="99" imageSrc={image8} />
          </div>
          <div className='col-md-3 pt-3 '>
            <SalesItemCard Name="Hoodie" prePrice="500" newPrice="399" remainingQuantity="69" imageSrc={image9} />
          </div>

          <div className='col-md-3 pt-3'>
            <SalesItemCard Name="Oversize Shirt" prePrice="785" newPrice="574" remainingQuantity="11" imageSrc={image10} />
          </div>
          <div className='col-md-3 pt-3'>
            <SalesItemCard Name="shirt" prePrice="508" newPrice="354" remainingQuantity="3" imageSrc={image11} />
          </div>
          <div className='col-md-3 pt-3'>
            <SalesItemCard Name="Tshirt" prePrice="324" newPrice="143" remainingQuantity="85" imageSrc={image12} />
         
        </div>
      </div>
    </div>
  );
}
export default SalesPage;
import SalesCard from "./SalesCard";
import array from "../../UI/Data";

const SalesPage= () =>{
    var data=[]
    for (var i=0; i<=70;i++){
        data.push(array[Math.floor(Math.random()*(array.length))])
        data[i].newPrice=(data[i].costPrice+data[i].price)/2

        
    }
data = [...new Set(data)];
return(<div>{data.map((props) =>{return (<SalesCard title={props.productName} imgsrc={props.image} newPrice={props.newPrice+"$"} quantity={props.quantity} prePrice={props.price+" $"}/>)})}</div>);}

export default SalesPage;

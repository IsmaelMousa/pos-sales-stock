import "./MenPantsCard.css"
import img1 from '../images/Chieno.webp';
const CardPantsCard = (props) => {

    const classes = "card"
    return (
        <div className="col-2">
            <div className={classes}>
                <img src={img1} alt ='Pants'/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                    {props.price}
                    </p>
                    <p className="card-text">
                    {props.quantity}
                    </p>
                </div>
                </div>
                </div>
    );
}

export default CardPantsCard;
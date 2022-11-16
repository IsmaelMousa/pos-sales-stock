import "./MenPantsCard.css"
import img1 from '../Images/Jeans.jpg';
const Card = (props) => {

    const classes = "card"
    return (
        <div className="col-3">
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
                {props.children}
                </div>
                </div>
    );
}

export default Card;
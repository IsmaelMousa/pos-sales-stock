
const SalesItemCard = (props) => {
    return (
        <section className="salesitemcard">
            <button className='button'>
            <div className="card text-center">
                <div className="overflow">
                    <img src={props.imageSrc} alt="image " className='card-img-top'/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.Name}</h4>
                    <div>
                    <del  className="card-text "> ${props.prePrice}</del>
                    <h7  className="card-text "> &nbsp;&nbsp; &nbsp;&nbsp;${props.newPrice}</h7>
                    </div>
                   
                    <h6  className="card-text ">Remaining: {props.remainingQuantity}</h6>


                </div>
            </div>
            </button>

        </section>
    )
}
export default SalesItemCard;
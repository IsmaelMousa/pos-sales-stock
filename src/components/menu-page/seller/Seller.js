import { useNavigate } from "react-router-dom";
import "./Seller.css";
const Seller = () => {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/women");
    }
    return (
        <div className="seller">
            <h1>Seller</h1>
            <form>
                <input type={"email"} placeholder={"Email"} />
                <input type={"password"} placeholder={"Password"} />
                <button type={"submit"} onClick={handleClick}> Go</button>
            </form>

        </div>

    );
};

export default Seller;
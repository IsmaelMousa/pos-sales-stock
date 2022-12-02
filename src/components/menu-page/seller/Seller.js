import "./Seller.css";
const Seller = () => {
    return (
        <div className="seller">
            <h1>Seller</h1>
            <form>
                <input type={"email"} placeholder={"Email"} />
                <input type={"password"} placeholder={"Password"} />
                <button type={"submit"}> Go</button>
            </form>

        </div>

    );
};

export default Seller;
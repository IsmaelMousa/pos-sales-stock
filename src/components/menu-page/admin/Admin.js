import "./Admin.css";
const Admin = () => {
    return (
        <div className="admin">
            <h1> Admin</h1>
            <form>
                <input type={"email"} placeholder={"Email"} />
                <input type={"password"} placeholder={"Password"} />
                <button type={"submit"}>Go</button>
            </form>

        </div>
    );
};

export default Admin;
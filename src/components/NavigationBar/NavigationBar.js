import "./NavigationBar.css";
const NavigationBar = () => {
    return (
        <nav>
            <a href="/"> Point - Of - Sale </a>
            <div>

                <p> Welcome , <span>Guest </span>
                </p>
                <i className="bi bi-person-circle"></i>
            </div>
        </nav>
    );
};

export default NavigationBar;
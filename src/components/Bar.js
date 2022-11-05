import Search from "./Search";

const Bar =()=>{
    return (
        <body>
            <nav className="navbar navbar-expand-lg  stiky-top">
                <div  className="container-fluid">
                    <a  className="navbar-brand" href="#">NAME</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="bi bi-list"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        </ul>
                      
                       <button calssName="back">
                            <i className="bi bi-arrow-bar-right"></i>
                        </button>
                    </div>
                </div>
            </nav>   
        </body>
    )
}
export default Bar;


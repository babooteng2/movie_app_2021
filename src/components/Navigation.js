import { Link } from "react-router-dom"
import "./Navigation.css"

function Navigation() {
    //https://reactrouter.com/web/api/Link/to-object
    return (
        <div className="nav">            
            <Link to="/">Home</Link>
            <Link to={"/about"}>About</Link>
        </div>
    );
}

export default Navigation
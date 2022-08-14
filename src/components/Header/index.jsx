import {  Link } from "react-router-dom";
import './index.css'

const Header = () => {

    return (
        <div className="header">
            <h1>
                <Link to="/">Posts</Link>
            </h1>
            <nav>
                <ul>
                     <li>
                       <Link to="/comments" > comments</Link> 
                    </li>
                    <li>
                        <Link to="/albums">albums</Link>
                    </li>
                    <li>
                        <Link to="/photos">photos</Link>
                    </li>
                    <li>
                        <Link to="/todos">todos</Link>
                    </li>

                    <li>
                        <Link to="/users">users</Link>
                    </li> 
                </ul>
            </nav>
        </div>
     );
}
 
export default Header;
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navigation-bar">
            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <NavLink exact to="/" >Home</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/about" >About</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact" >Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
 
        <nav className="nav-wrapper red darken-3 gradient" >
            <div className="container">
                <a href="/t" className="brand-logo center">Med App</a>
                <ul className="right">
                    <li>
                        <Link to="home">Home</Link>
                    </li>
                    <li>
                        <Link to="login"> Login</Link>
                    </li>
                    <li>
                        <Link to="register"> Register</Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
    );
}

export default NavBar
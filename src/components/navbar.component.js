import React, {Component} from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="ml-5 navbar-brand">ExcerTracker</Link>
                <div className="collapsed navbar-collapse" id="navbarNavAltMarkup">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Exercises</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/create" className="nav-link">Create Exercise Log</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
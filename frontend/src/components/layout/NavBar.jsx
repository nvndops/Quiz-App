import React from "react";
import { NavLink } from "react-router-dom";
import styles from './NavBar.module.css';

const Navbar = () => {
    return (
        <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
            <div className="container-fluid">
                <NavLink className={`navbar-brand ${styles.navbarBrand}`} to={"/"}>
                    Online Quiz App
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className={`${styles.navbarTogglerIcon} navbar-toggler-icon`}></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className={`navbar-nav ml-auto ${styles.navbarNav}`}>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to={"/admin"}>
                                Admin
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className={`nav-link ${styles.navLink}`} to={"/quiz-stepper"}>
                                Take Quiz
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

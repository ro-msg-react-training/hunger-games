import React from "react";
import Logo from '../../resources/logo.png';
import '../../styles/navbar.css';
import { Link } from "react-router-dom";
import { NavbarComponentState } from "./NavbarSmartView";
import { FaRegUserCircle } from "react-icons/fa";

export const NavbarDumpView: React.FC<NavbarComponentState> = (props: NavbarComponentState) => {
    if (props.activateNavbar) {
        return (
            <div id="PageNavbar">
                <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
                    <div className="navbar-brand">
                        <Link to="/" id="navbarLogoLink">
                            <div className="navbar-item">
                                <img id="navbarLogo" src={Logo} alt="Web site logo" />
                            </div>
                        </Link>

                        <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </div>
                    </div>

                    <div className={"navbar-menu"}>
                        <div className="navbar-start">
                            <div className="navbar-item">
                                <Link to="/districts" className = "inversedColors">
                                    Districts
                            </Link>
                            </div>

                            <div className="navbar-item">
                                <Link to="/demands" className = "inversedColors">
                                    Demands
                            </Link>
                            </div>

                            <div className="navbar-item">
                                <Link to="/peacekeepers" className = "inversedColors">
                                    Peacekeepers
                            </Link>
                            </div>
                        </div>

                        <div className="navbar-end">
                            <div className="navbar-item has-dropdown is-hoverable">
                                <div className="navbar-link is-arrowless">
                                    <div className = "level inversedColors has-text-centered">
                                        <div className = "level-item level-left userIcon"><FaRegUserCircle /></div>
                                        <div className = "level-item level-right userName">johndoe</div>
                                    </div>
                                </div>

                                <div className="navbar-dropdown is-boxed">
                                    <div className="navbar-item button is-fullwidth navbarButtons" onClick = {() => props.logout()}>
                                        Game over
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }
}
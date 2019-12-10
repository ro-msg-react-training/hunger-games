import React from "react";
import Logo from '../../resources/logo.png';
import '../../styles/navbar.scss';
import { Link } from "react-router-dom";

export const NavbarDumpView: React.FC = () => {
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

                {/* (typeof window.orientation !== "undefined" || navigator.userAgent.indexOf('IRMobile') !== -1) ? "is-active" : "" */}
                <div className={"navbar-menu"}>
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <Link to="/districts" className="has-text-white">
                                Districts
                        </Link>
                        </div>

                        <div className="navbar-item">
                            <Link to="/demands" className="has-text-white">
                                Demands
                        </Link>
                        </div>

                        <div className="navbar-item">
                            <Link to="/peacekeepers" className="has-text-white">
                                Peacekeepers
                        </Link>
                        </div>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                                Hello tribute
                            </div>

                            <div className="navbar-dropdown is-boxed">
                                <button className="navbar-item button is-fullwidth navbarButtons">
                                    Game over
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}
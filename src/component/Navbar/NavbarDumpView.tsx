import React from "react";
import Logo from "../../resources/logo.png";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import { NavbarComponentState } from "./NavbarSmartView";
import { FaRegUserCircle } from "react-icons/fa";

export const NavbarDumpView: React.FC<NavbarComponentState> = (
  props: NavbarComponentState
) => {
  if (props.activateNavbar) {
    return (
      <div id="PageNavbar">
        <nav
          className="navbar is-dark is-fixed-top"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <Link
              to="/"
              id="navbarLogoLink"
              onClick={() => props.setActiveTab(props, "districts")}
            >
              <div className="navbar-item">
                <img id="navbarLogo" src={Logo} alt="Web site logo" />
              </div>
            </Link>

            <div
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true">asd</span>
              <span aria-hidden="true">asd</span>
              <span aria-hidden="true">asd</span>
            </div>
          </div>

          <div className={"navbar-menu is-active"}>
            <div className="navbar-start">
              <div className="navbar-item">
                <Link
                  to="/districts"
                  className={
                    props.activeTab === "districts"
                      ? "active-tab"
                      : "inversedColors"
                  }
                  onClick={() => props.setActiveTab(props, "districts")}
                >
                  Districts
                </Link>
              </div>

              <div className="navbar-item">
                <Link
                  to="/demands"
                  className={
                    props.activeTab === "demands"
                      ? "active-tab"
                      : "inversedColors"
                  }
                  onClick={() => props.setActiveTab(props, "demands")}
                >
                  Demands
                </Link>
              </div>

              <div className="navbar-item">
                <Link
                  to="/peacekeepers"
                  className={
                    props.activeTab === "peacekeepers"
                      ? "active-tab"
                      : "inversedColors"
                  }
                  onClick={() => props.setActiveTab(props, "peacekeepers")}
                >
                  Peacekeepers
                </Link>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item has-dropdown is-hoverable">
                <div className="navbar-link is-arrowless">
                  <div className="level inversedColors has-text-centered">
                    <div className="level-item level-left userIcon">
                      <FaRegUserCircle />
                    </div>
                    <div className="level-item level-right userName">
                      {props.loggedInUserDetails.username}
                    </div>
                  </div>
                </div>

                <div className="navbar-dropdown is-boxed">
                  <Link to="/login">
                    <div
                      className="navbar-item button is-fullwidth navbarButtons"
                      onClick={() => props.logout()}
                    >
                      Game over
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  } else {
    return <div></div>;
  }
};

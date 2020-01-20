import React, { useState } from "react";
import logo from "../../resources/logo.png";
import "../../styles/login.scss";
import { LoginComponentState } from "./LoginSmartComponent";
import { Redirect } from "react-router";

export const LoginDisplay: React.FC<LoginComponentState> = (props: LoginComponentState) => {
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");

  if (!props.isLoggedIn) {
    return (
      <div className="content-Login">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box loginBox">
                <div className="title has-text-white is-family-sand-serif">
                  Hunger Games
              </div>
                <figure className="avatar">
                  <img src={logo} alt="Website Logo, The Mockingkay" />
                </figure>
                <form>
                  <div className="field">
                    <div className="control">
                      <input className="input" type="email" placeholder="Nickname" value={userName} onChange={(e) => { props.onUsernameChange(props, e.target.value); setUsername(e.target.value.trim()); }} />
                    </div>
                  </div>

                  <div className="field">
                    <div className="control">
                      <input className="input" type="password" placeholder="Secret code" value={password} onChange={(e) => { props.onPasswordChange(props, e.target.value); setPassword(e.target.value.trim()); }} />
                    </div>
                  </div>
                  <div className="field"></div>

                  <input id="buttonLogin" className="button is-block is-info is-medium is-fullwidth" readOnly defaultValue = "Enter food arena" autoFocus onClick={() => { props.onLoginClick(props); setPassword(""); setUsername(""); }}/>

                  <p className="has-text-white">
                    <br></br>
                    <a href="/register" className="register">
                      {"Not a participant yet? Become our newest tribute!"}
                    </a>
                    &nbsp;
                </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <Redirect to="/districts" />
    );
  }
};

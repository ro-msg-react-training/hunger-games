import React, { SyntheticEvent, useState } from "react";
import logo from "../../resources/logo.png";
import "../../styles/login.css";
import { Redirect } from "react-router";
export interface IDumbLogin {
  onUsernameChange: (e: SyntheticEvent) => void;
  onPasswordChange: (e: SyntheticEvent) => void;
  checkUserData: (username: string, password: string) => boolean;
}

export const LoginDisplay = (props: IDumbLogin) => {
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");

  return (
    <div className="content-Login">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <div className="title has-text-white is-family-sand-serif">
                Hunger Games
              </div>
              <figure className="avatar">
                <img src={logo} />
              </figure>
              <form>
                <div className="field">
                  <div className="control">
                    <input
                      className="input"
                      type="email"
                      placeholder="Nickname"
                      value={userName}
                      onChange={(e: SyntheticEvent) => {
                        props.onUsernameChange(e);
                        setUsername(
                          (e.target as HTMLInputElement).value.trim()
                        );
                      }}
                      contentEditable={true}
                    ></input>
                  </div>
                </div>

                <div className="field">
                  <div className="control">
                    <input
                      className="input "
                      type="password"
                      placeholder="Secret code"
                      value={password}
                      onChange={(e: SyntheticEvent) => {
                        props.onPasswordChange(e);
                        setPassword(
                          (e.target as HTMLInputElement).value.trim()
                        );
                      }}
                    />
                  </div>
                </div>
                <div className="field"></div>
                <button
                  className="button is-block is-info is-medium is-fullwidth"
                  id="buttonLogin"
                >
                  Enter food arena{" "}
                  <i className="fa fa-sign-in" aria-hidden="true"></i>
                </button>
                <p className="has-text-white">
                  <br></br>
                  <a
                    href="../"
                    className="register"
                    onClick={() => {
                      if (props.checkUserData(userName, password) === true) {
                        return <Redirect to="/"></Redirect>;
                      } else {
                        setUsername("");
                        setPassword("");
                      }
                    }}>
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
};

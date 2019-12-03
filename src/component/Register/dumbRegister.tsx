import React, { SyntheticEvent, useState } from "react";
import registerPic from "../../resources/register.png";
import "../../styles/login.scss";
import { Link } from "react-router-dom";
export interface IDumbRegister {
  onUsernameChange: (e: SyntheticEvent) => void;
  onPasswordChange: (e: SyntheticEvent) => void;
  onEmailChange:(e:SyntheticEvent)=>void;
  saveUserDate: (userName: string, password: string) => void;
}

export const RegisterDisplay = (props: IDumbRegister) => {
  const [password, setPassword] = useState("");
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="content-Login">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="column is-4 is-offset-4">
            <div className="box">
              <div className="title has-text-white is-family-sand-serif">
                Hello new tribute!
              </div>
              <figure className="avatar">
                <img src={registerPic} />
              </figure>
              <form>
                <div className="field">
                  <div className="control">
                    <p className="has-text-white">
                      {"Insert your desired nickname"}
                    </p>
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
                    <p className="has-text-white">{"And your secret code"}</p>
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
                <div className="field">
                  <div className="control">
                    <p className="has-text-white">
                      {"Insert your e-mail"}
                    </p>
                    <input
                      className="input"
                      type="email"
                      placeholder="user@msg.group"
                      value={email}
                      onChange={(e: SyntheticEvent) => {
                        props.onEmailChange(e);
                        setEmail(
                          (e.target as HTMLInputElement).value.trim()
                        );
                      }}
                      contentEditable={true}
                    ></input>
                  </div>
                </div>
                <div className="field"></div>
                <Link to="/home">
                  <button
                    className="button is-block is-info is-medium is-fullwidth"
                    id="buttonLogin"
                    onClick={() => props.saveUserDate(userName, password)}
                  >
                    {"Join the games"}
                  
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

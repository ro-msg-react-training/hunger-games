import React from "react";
import registerPic from "../../resources/register.png";
import "../../styles/login.scss";
import { RegisterComponentState } from "./RegisterSmartComponent";
import { Redirect } from "react-router";

export const RegisterDumpView: React.FC<RegisterComponentState> = (props: RegisterComponentState) => {
  if (!props.activateNavbar) {
    return (
      <div className="content-Login">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <div className="box loginBox">
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
                      <input className="input" type="email" placeholder="Nickname" defaultValue={props.userInfo.username} onChange={(e) => props.onUsernameChange(props, e.target.value)} />
                    </div>
              <figure className="avatar">
                <img src={registerPic} alt = "Registration logo, arrow"/>
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

                  <div className="field">
                    <div className="control">
                      <p className="has-text-white">{"And your secret code"}</p>
                      <input className="input" type="password" placeholder="Secret code" defaultValue={props.userInfo.password} onChange={(e) => props.onPasswordChange(props, e.target.value)} />
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <p className="has-text-white">
                        {"Insert your e-mail"}
                      </p>
                      <input className="input" type="email" placeholder="user@msg.group" defaultValue={props.userInfo.email} onChange={(e) => props.onEmailChange(props, e.target.value)} />
                    </div>
                  </div>
                  <div className="field"></div>
                  <div className="button is-block is-info is-medium is-fullwidth" id="buttonLogin"
                    onClick={() => props.saveUserData(props)}>
                    {"Join the games"}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else if (props.activateNavbar) {
    return (
      <Redirect to="/districts" />
    );
  } else {
    return (
      <div></div>
    );
  }
};

import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => (
    <section className="hero is-primary is-fullheight">
        <div className="hero-body">
            <div className="container has-text-centered">
                <h1 className="title">
                    Home
                </h1>
                <div className="subtitle">
                    <Link to="/examples" className="button is-large">
                        Examples
                    </Link>
                </div>
            </div>
        </div>
    </section>
);
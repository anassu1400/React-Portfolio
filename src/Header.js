import React, { Component } from "react";
import logo from "./images/white_vec_signature.png";

class Header extends Component {
  render() {
    return (
      <div id="header-wrapper">
        <div id="header" className="container">
          <div id="logo">
            <h1>
              <a href="#">
                <img src={logo} />
              </a>
            </h1>
          </div>
          <nav id="nav">
            <ul>
              <li className="current_page_item">
                <a href="#">Homepage</a>
              </li>
              <li>
                <a href="#">Experience</a>
              </li>
              <li>
                <a href="#">Previous Work</a>
              </li>
              <li>
                <a href="#">Hire Me!</a>
              </li>
            </ul>
          </nav>
        </div>

        <div id="banner" style={{ paddingBottom: "20vw", paddingTop: "15vw" }}>
          <div className="container">
            <div className="row">
              <section className="12u">
                <header>
                  <h2>Anas Alsahli's Portfolio</h2>
                  <span className="byline">
                    This is the portfolio that displays my work in programming,
                    design, and more...
                  </span>
                </header>
              </section>
            </div>
          </div>
          <a
            href="#"
            style={{
              boxShadow: "inset 0px -15px 10px 0px rgba(0,0,0,0.3)"
            }}
            className="button button-alt"
          >
            <div className="hireme">Hire Me!</div>
          </a>
        </div>
      </div>
    );
  }
}
export default Header;

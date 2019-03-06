import React, { Component } from "react";

class Featured extends Component {
  render() {
    return (
      <div id="featured-wrapper">
        <div className="container">
          <div className="row double">
            <section className="4u">
              <header>
                <h2>Mobile Application Development</h2>
              </header>
              <span className="pennant">
                <span className="fa fa-apple" />
              </span>
              <p>
                I have experience developing multi-platform mobile applications
                using...
              </p>
              <a href="#" className="button button-style1">
                Read More
              </a>
            </section>
            <section className="4u">
              <header>
                <h2>Video Game Development</h2>
              </header>
              <span className="pennant">
                <span className="fa fa-rocket" />
              </span>
              <p>
                I have been working with Unity3D to develop games for 5 years, I
                have a project currently in development and multiple prototypes
                completed...
              </p>
              <a href="#" className="button button-style1">
                Read More
              </a>
            </section>
            <section className="4u">
              <header>
                <h2>Back End Deveolpment</h2>
              </header>
              <span className="pennant">
                <span className="fa fa-cogs" />
              </span>
              <p>
                I have worked with ASP.NET and C# to make a MVC web application
                and...
              </p>
              <a href="#" className="button button-style1">
                Read More
              </a>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
export default Featured;

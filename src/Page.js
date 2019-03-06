import React, { Component } from "react";
import blogs from "./blog";
import pus from "./ProjectUpdates";
import BlogList from "./BlogList";
import PUList from "./PUList";
class Page extends Component {
  render() {
    return (
      <div id="page">
        <div className="container">
          <div className="row">
            <div
              id="content"
              className="8u"
              style={{
                width: "100%",
                paddingLeft: "100px",
                paddingRight: "100px"
              }}
            >
              <article>
                <header>
                  <h2>Blog</h2>
                </header>
                <a href="#" className="image-style1">
                  <img src="images/portfolio_screenshot5.png" alt="" />
                </a>
                <p>
                  This is my blog you can browse through it from this website,
                  enjoy! <br />
                  <a href="">Twitter</a>.
                </p>
                <a href="#" className="button button-style1">
                  Hire Me!
                </a>
              </article>
              <div id="one-column">
                <div className="row">
                  <section className="6u">
                    <h2>Recent Blog Posts:</h2>
                    <p />
                    <BlogList blogs={blogs} />
                  </section>
                  <section className="6u">
                    <h2>Project Updates:</h2>
                    <p />
                    <PUList PUs={pus} />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Page;

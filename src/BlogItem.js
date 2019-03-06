import React, { Component } from "react";

class BlogItem extends Component {
  render() {
    return (
      <li className="first">
        <p>
          <span className="date">
            <a href="#">{this.props.blog.date}</a>
          </span>
          <span className="heading-title">{this.props.blog.title}</span>
        </p>
        <p>
          <a href="#">{this.props.blog.description}</a>
        </p>
      </li>
    );
  }
}

export default BlogItem;

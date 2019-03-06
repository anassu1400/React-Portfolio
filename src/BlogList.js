import React, { Component } from "react";
import BlogItem from "./BlogItem";

class BlogList extends Component {
  render() {
    const posts = this.props.blogs
      .map(post => <BlogItem key={post.id} blog={post} />)
      .slice(0, 3);
    return <ul className="style3">{posts}</ul>;
  }
}
export default BlogList;

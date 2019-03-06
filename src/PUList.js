import React, { Component } from "react";
import PUItem from "./PUItem";

class PUList extends Component {
  render() {
    const posts = this.props.PUs.map(post => (
      <PUItem key={post.id} PU={post} />
    )).slice(0, 3);
    return <ul className="style4">{posts}</ul>;
  }
}
export default PUList;

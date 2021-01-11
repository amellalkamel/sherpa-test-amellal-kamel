import React from "react";
import "./content.css";
class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <div className="title-content-hero">
          <h2>Hero</h2>
        </div>
        <div className="title-content-image">Content - image</div>
      </div>
    );
  }
}
export default Content;

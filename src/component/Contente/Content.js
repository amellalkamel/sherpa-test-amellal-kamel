import React from "react";
import "./content.css";
class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content" className={this.props.classContent}>
        <div className="title-content-hero">
          <h2>Hero</h2>
        </div>
        <div className="title-content-image">Content - image</div>
      </div>
    );
  }
}
export default Content;

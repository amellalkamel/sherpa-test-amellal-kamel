import React from "react";
import "./carte.css";
class Carte extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div id="carte" className={this.props.classCarte}></div>;
  }
}
export default Carte;

import React from "react";
import "./carte.css";
class Carte extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in cartes", this.props);
  }

  render() {
    return (
      <div id="carte" className={this.props.classCarte}>
        <div className="carte-content">
          <p>
            {" "}
            <img src={this.props.detail}></img>{" "}
          </p>
          <p> {this.props.logo}</p>
          <p> {this.props.title} </p>
        </div>
      </div>
    );
  }
}
export default Carte;

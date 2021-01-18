import React from "react";
import "./carte.css";
class Carte extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in cartes", this.props);
  }

  render() {
    return (
      <div id="carte" className="normalclass">
        <div className="carte-content">
          <p>
            {" "}
            <img src={this.props.logo}></img>{" "}
          </p>
          <p> {this.props.detail}</p>
          <p> {this.props.title} </p>
        </div>
      </div>
    );
  }
}
export default Carte;

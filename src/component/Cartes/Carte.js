import React from "react";
import "./carte.css";
class Carte extends React.Component {
  constructor(props) {
    super(props);
    console.log("props in cartes", this.props);
  }

  render() {
    return (
      <div
        id={this.props.id}
        // className="normalclass"
        className={this.props.classCarteBlan}
        onClick={this.props.handleClickCarte}
      >
        <div className={this.props.classCarteNoir}>
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

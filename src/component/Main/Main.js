import React from "react";
import "./main.css";
class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.classMain}>
        <div className={this.props.classMainTitle}> Featured meetings </div>
        <div className={this.props.classMainGirs}>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
          <div className="main-gris"></div>
        </div>
      </div>
    );
  }
}
export default Main;

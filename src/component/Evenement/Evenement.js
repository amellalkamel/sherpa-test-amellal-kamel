import React from "react";
import "./evenement.css";
class Evenement extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="evenement" className={this.props.classEvent}>
        <div className="evenement-content"> Companies</div>
        <div className="evenement-content"> Members</div>
        <div className="evenement-content"> Events</div>
        <div className="evenement-content"> Studio</div>
      </div>
    );
  }
}
export default Evenement;

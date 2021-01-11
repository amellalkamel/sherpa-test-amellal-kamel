import React from "react";
import "./profil.css";
class Profil extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="profil">
        <div className="circle">
          <h5>
            profil
            <br /> Login
          </h5>
        </div>
      </div>
    );
  }
}
export default Profil;

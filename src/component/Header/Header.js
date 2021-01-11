import React from "react";
import "./header.css";
class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="header">
        <div className="title">
          {" "}
          <h1>Marketplace</h1>
        </div>
      </div>
    );
  }
}
export default Header;

import React from 'react';
import './header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log('props in header', this.props);
  }

  render() {
    return (
      <div
        id="header"
        className={this.props.classHeader}
        onClick={this.props.handleClick}
      >
        <div className="title">Marketplace</div>
      </div>
    );
  }
}
export default Header;

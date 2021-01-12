import './test.css';
import React from 'react';

class Test extends React.Component {
  constructor() {
    super();
    this.state = {
      myclass: '',
    };
    this.divclicked = this.divclicked.bind(this);
  }

  divclicked() {
    if (this.state.myclass === '') {
      this.setState({
        myclass: 'coolclass',
      });
    } else {
      this.setState({
        myclass: '',
      });
    }
  }

  render() {
    return (
      <div className="test">
        <div id="box" onClick={this.divclicked}></div>
        <div id="seconddiv" className={this.state.myclass}>
          <p>help help</p>
          <p>help help</p>
          <p>help help</p>
          <p>help help</p>
          <p>help help</p>
        </div>
      </div>
    );
  }
}
export default Test;

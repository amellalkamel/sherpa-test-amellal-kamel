import './App.css';
import React from 'react';
import Header from './component/Header/Header';
import Content from './component/Contente/Content';
import Main from './component/Main/Main';
import Profil from './component/profil/Profil';
import Evenement from './component/Evenement/Evenement';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: true,
      classHeader: 'normalclass',
    };
  }
  async componentWillMount() {
    const datas = await fetch('https://tt-sherpa-backend.herokuapp.com/events');
    datas.json().then((data) => console.log('data is', data));
  }
  handleClick = () => {
    console.log('je suis clicker');
    this.setState({
      showContent: !this.state.showContent,
    });
    if (this.state.showContent === true) {
      this.setState({
        classHeader: 'grandclass',
      });
    } else {
      this.setState({
        classHeader: 'petitclass',
      });
    }
  };
  render() {
    console.log('show content', this.state.showContent);
    console.log('classHeader', this.state.classHeader);
    if (this.state.showContent === true) {
      return (
        <div className="App">
          <Header
            {...this.state}
            handleClick={this.handleClick}
            className={this.state.classHeader}
          />
          <Profil />
          <Content />;
          <Main />
          <Evenement />
        </div>
      );
    } else {
      return (
        <div className="App">
          <Header
            {...this.state}
            handleClick={this.handleClick}
            className={this.state.classHeader}
          />
          <Profil />
          {/* <Content />; */}
          <Main />
          <Evenement />
        </div>
      );
    }
  }
}

export default App;

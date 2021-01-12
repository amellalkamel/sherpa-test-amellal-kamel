import './App.css';
import React from 'react';
import Header from './component/Header/Header';
import Content from './component/Contente/Content';
import Main from './component/Main/Main';
import Profil from './component/profil/Profil';
import Evenement from './component/Evenement/Evenement';
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentWillMount() {
    const datas = await fetch('https://tt-sherpa-backend.herokuapp.com/events');
    datas.json().then((data) => console.log('data is', data));
  }
  handleClick = () => {
    console.log('je suis clicker');
  };
  render() {
    return (
      <div className="App">
        <Header handleClick={this.handleClick} />
        <Profil />
        <Content />
        <Main />
        <Evenement />
      </div>
    );
  }
}

export default App;

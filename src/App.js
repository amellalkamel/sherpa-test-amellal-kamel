import "./App.css";
import React from "react";
import Header from "./component/Header/Header";
import Content from "./component/Contente/Content";
import Main from "./component/Main/Main";
import Profil from "./component/profil/Profil";
import Evenement from "./component/Evenement/Evenement";
import Carte from "./component/Cartes/Carte";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: true,
      classHeader: "normalclass",
      classContent: "normalclass",
      classEvent: "normalclass",
      classCarte: "normalclass",
    };
  }
  async componentWillMount() {
    const datas = await fetch("https://tt-sherpa-backend.herokuapp.com/events");
    datas.json().then((data) => console.log("data is", data));
  }
  handleClick = () => {
    console.log("je suis clicker");
    this.setState({
      showContent: !this.state.showContent,
    });
    if (this.state.showContent == true) {
      this.setState({
        classHeader: "petitclass",
        classContent: "hide",
        classEvent: "fixe",
      });
    } else {
      this.setState({
        classHeader: "grandclass",
        classContent: "normalclass",
        classEvent: "normalclass",
      });
    }
  };
  render() {
    // console.log("show content", this.state.showContent);
    // console.log("classHeader", this.state.classHeader);
    console.log("classEvent", this.state.classEvent);
    return (
      <div className="App">
        <Header
          {...this.state}
          handleClick={this.handleClick}
          className={this.state.classHeader}
        />
        <Profil />
        <Content {...this.state} className={this.state.classContent} />
        <Main />
        <Evenement {...this.state} className={this.state.classEvent} />
        <Carte {...this.state} className={this.state.classCarte} />
      </div>
    );
  }
}

export default App;

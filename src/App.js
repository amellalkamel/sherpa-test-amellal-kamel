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
      classCarte: "carte-container",
      infos: [],
    };
  }
  async componentWillMount() {
    const datas = await fetch("https://tt-sherpa-backend.herokuapp.com/events");
    datas.json().then(async (data) => {
      console.log("data is", data);
      await this.setState({
        infos: data,
      });
    });
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
        classCarte: "hide",
      });
    } else {
      this.setState({
        classHeader: "grandclass",
        classContent: "normalclass",
        classEvent: "normalclass",
        classCarte: "carte-container",
      });
    }
  };
  render() {
    // console.log("show content", this.state.showContent);
    // console.log("classHeader", this.state.classHeader);
    console.log("classCarte", this.state.classCarte);
    console.log("infoss", this.state.infos);
    return (
      <div className="App">
        <Header {...this.state} handleClick={this.handleClick} />
        <Profil />
        <Content {...this.state} />
        <Main />
        <Evenement {...this.state} />
        <div id="cartes" className={this.state.classCarte}>
          {this.state.infos.map((info, index) => (
            <Carte
              key={index}
              title={info.title}
              detail={info.detail}
              logo={info.log}
              {...this.state}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;

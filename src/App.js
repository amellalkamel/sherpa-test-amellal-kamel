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
      classHeaderTitle: "title_grand",
      classContent: "normalclass",
      classEvent: "normalclass",
      classCarteNoir: "carte-noir",
      classCarteBlan: "carte-blan",
      classMain: "main-petit",
      classMainTitle: "main-title-hide",
      classMainGirs: "main-grid-hide",
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
    console.log("je suis clicker sur header");

    this.setState({
      classHeader: "grandclass",
      classHeaderTitle: "title_grand",
      classContent: "normalclass",
      classEvent: "normalclass",
      classCarteNoir: "carte-noir",
      classCarteBlan: "carte-blan",
      classMain: "main-petit",
      classMainTitle: "main-title-hide",
      classMainGirs: "main-grid-hide",
    });
  };
  handleClickCarte = (event) => {
    console.log("je sis clicker sur la carte", event);
    this.setState({
      classHeader: "petitclass",
      classHeaderTitle: "title_petit",
      classContent: "hide",
      classEvent: "fixe",
      classCarteNoir: "carte-noir-hide",
      classCarteBlan: "carte-blan-hide",
      classMain: "main-grand",
      classMainTitle: "main-title",
      classMainGirs: "main-grid",
    });
  };
  render() {
    console.log("show content", this.state.showContent);

    return (
      <div className="App">
        <Header {...this.state} handleClick={this.handleClick} />
        <Profil />
        <Content {...this.state} />
        <Main {...this.state} />
        <Evenement {...this.state} />
        <div id="cartes" className="carte-flex">
          {this.state.infos.map((info, index) => (
            <Carte
              handleClickCarte={(e) => {
                console.log(e);
                this.handleClickCarte(e);
              }}
              key={index}
              id={info.id}
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

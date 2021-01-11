import "./App.css";
import Header from "./component/Header/Header";
import Content from "./component/Contente/Content";
import Main from "./component/Main/Main";
import Profil from "./component/profil/Profil";
import Evenement from "./component/Evenement/Evenement";

function App() {
  return (
    <div className="App">
      <Header />
      <Profil />
      <Content />
      <Main />
      <Evenement />
    </div>
  );
}

export default App;

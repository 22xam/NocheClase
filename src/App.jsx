import Navbar from "./components/NavBar";
import "./components/NavBar.css";
import Login from "./components/Login";
import FooterBar from "./components/FooterBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      <FooterBar />
    </div>
  );
}

export default App;

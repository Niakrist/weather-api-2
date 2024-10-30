import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";

function App() {
  return (
    <div className="content">
      <Header />
      <Main />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;

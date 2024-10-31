import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Slider from "./components/Slider/Slider";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.content}>
      <Header />
      <Main />
      <Slider />
      <Footer />
    </div>
  );
}

export default App;

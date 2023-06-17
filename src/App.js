import About from "./Components/About/About";
import Projects from "./Components/About/Projects";
import Skills from "./Components/About/Skills";
import Footer from "./Components/Footer/Footer";
import Banner from "./Components/Headers/Banner";
import Header from "./Components/Headers/Header"

function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Skills/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;

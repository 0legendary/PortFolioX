import About from "./Components/About/About";
import Projects from "./Components/About/Projects";
import Skills from "./Components/About/Skills";
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
    </div>
  );
}

export default App;

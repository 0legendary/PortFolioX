import About from "./Components/About/About";
import Projects from "./Components/About/Projects";
import Skills from "./Components/About/Skills";
import Banner from "./Components/Banner";
import Header from "./Components/Header"

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

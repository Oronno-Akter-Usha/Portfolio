import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="text-gray-200 bg-black">
        <Navbar />
        <About />
        <Skills />
        <Projects />
      </div>
    </>
  );
}

export default App;

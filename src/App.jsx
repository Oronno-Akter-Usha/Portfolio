import About from "./components/About";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <div className="text-gray-200 bg-black">
        <Navbar />
        <About />
        <Skills />
      </div>
    </>
  );
}

export default App;

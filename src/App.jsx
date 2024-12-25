import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className="text-gray-200 bg-black">
        <Navbar />
        <About />
      </div>
    </>
  );
}

export default App;

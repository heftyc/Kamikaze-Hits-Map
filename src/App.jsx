import "./App.css";
import Map from "./components/Map";
import NavBar from "./components/Navbar";
import AboutPanel from "./components/AboutPanel";
function App() {
  return (
    <div>
      <NavBar />
      <AboutPanel />
      <Map />
    </div>
  );
}

export default App;

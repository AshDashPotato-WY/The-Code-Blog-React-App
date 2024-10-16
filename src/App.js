import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  // object/boolean can't be output
  // only string and numbers can be output

  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;

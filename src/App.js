import NavBar from "./NavBar";
import Home from "./Home";
import Create from "./Create";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import BlogDetails from "./BlogDetails";

function App() {
  // object/boolean can't be output
  // only string and numbers can be output

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          {/* <Home /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

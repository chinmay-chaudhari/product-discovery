import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home/Home";
import NavigationBar from "../components/navigationBar/NavigationBar";

function App() {
  return (
    <>
      <NavigationBar />
      <div className="container-fluid">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="*">
              <h1>404 - Not Found!</h1>
            </Route>
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;

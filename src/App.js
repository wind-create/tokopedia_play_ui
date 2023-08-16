import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/play/:id" render={() => <Detail />} />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/*" render={() => <NotFound />} />
      </Switch>
    </Router>
  );
}

export default App;

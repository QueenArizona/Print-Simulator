import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import SimulatorPage from "./components/SimulatorPage";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/simulator" component={SimulatorPage} />
          <Route path="/result" component={ResultPage} />
          <Route path="/" component={IntroPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

import Navbar from "./Navbar";
import Home from "./Home";
import Question from "./Question";
import Result from "./Result";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";
function App() {
	const currentUrl = window.location.href;
  return (
    <Router>
      <div className="App">
        <div className="navbardiv">
          <Navbar />
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <div id="subtitle">
                <text>내가 래퍼라면?</text>
              </div>
              <Home />
            </Route>
            <Route path="/question">
              <Question />
            </Route>
            <Route path="/result/:MBTI">
              <div id="subtitle">
                <text>내가 래퍼라면?</text>
              </div>
              <Result />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

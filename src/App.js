import Navbar from './Navbar';
import Home from './Home';
import Question from './Question';
import Result from './Result';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">

        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/question">
              <Question />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
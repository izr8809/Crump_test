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
      <Helmet>
      <title>크럼프 래퍼 테스트</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
        <meta name='url' property="og:url" content={currentUrl}/>
        <meta name='type' property="og:type" content="website"/>
        <meta name='title' property="og:title" content="1분 만에 만드는 노션 웹사이트, 우피!"/>
        <meta name='description' property="og:description" content="우피는 노션 페이지를 최적화된 웹사이트로 바꿔드립니다. 원하는 주소를 연결하여 나만의 홈페이지를 시작해 보세요."/>
        <meta name='image' property="og:image" content="../src/img/main.jpg"/>
      </Helmet>
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

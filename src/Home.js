import { useState, useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Share from "./share";
import AnimatedNumbers from "react-animated-numbers";
import logo from "./img/11.png";
import { Helmet } from "react-helmet";

const Home = () => {
  const history = useHistory();
  const num_from_Server = 133333;
  const [num, setNum] = useState(999999);

  const goHome = () => {
    history.push("/question");
  };
  useEffect(() => {
    fetch("/number")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTimeout(() => {
          setNum(data[0].number);
        }, 1000);
      });
  }, []);

  return (
    <BrowserRouter>
      <Helmet>
        <title>Learning React Helmet!</title>
        <meta name='description' content='Beginner friendly page for learning React Helmet.' />
      </Helmet>
      <div className="home">
        <div className="my_div">
          <img className="my_bg" src={"./img/main.jpg"}></img>
        </div>

        <div className="nextdiv">
          <button onClick={goHome}>테스트 시작</button>
        </div>

        <div className="TESTER">
          <text>참여자 수</text>
        </div>
        <div className="countingdiv">
          <AnimatedNumbers
            id="AnimatedNumbers"
            animateToNumber={num}
            fontStyle={{ fontSize: 36, color: "#525252" }}
            includeComma={true}
            configs={(number, index) => {
              return { mass: 1, tension: 230 * (index + 1), friction: 140 };
            }}
          ></AnimatedNumbers>
          {/* <h1>명</h1> */}
        </div>

        <div className="TESTER_share">
          <text>공유하기</text>
        </div>
        <div className="sharediv">
          <Share />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default Home;

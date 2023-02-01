import { useState } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Share from './share';
import AnimatedNumbers from "react-animated-numbers";

const Home = () => {
    const history = useHistory();
    const num_from_Server = 133333;
    const [num, setNum] = useState(999999);

    const goHome = () => {
        history.push('/question')
    }

    setTimeout(() => {
        setNum(num_from_Server);
    }, 1000);

    return (
        <BrowserRouter>
            <div className="home">
                

                <div className="my_div my_bg">
                </div>

                <h2>
                    래퍼 테스트12121
                </h2>

                <div className="my_div my_bg">
                </div>

                <h2>
                    참여자 수
                </h2>
                <div className="countingdiv">
                        <AnimatedNumbers
                            id = "AnimatedNumbers"
                            animateToNumber={num}
                            fontStyle={{ fontSize: 36 }}
                            includeComma = {true}
                            configs={(number, index) => {
                            return { mass: 1, tension: 230 * (index + 1), friction: 140 };
                            }}
                        ></AnimatedNumbers> 
                        {/* <h1>명</h1> */}
                </div>
                <div className="nextdiv">
                    <button onClick={goHome}>Next</button>

                </div>
                <h2>
                    테스트 공유하기
                </h2>

                <div className="sharediv">
                    <Share />
                </div>

            </div>
        </BrowserRouter>
    );
}

export default Home;
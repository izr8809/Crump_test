import { useState } from "react";
import { BrowserRouter, Route } from 'react-router-dom';
import { useHistory  } from 'react-router-dom';
import Share from './share';

const Home = () => {
    const history = useHistory();

    const goHome = () => {
        history.push('/q')
    }

    return (
        <BrowserRouter>
        <div className="home">
            <div className="my_div my_bg">
            </div>

            <div>
                랩 스타일 테스트qwqw11
            </div>

            <h2>
                래퍼 테스트
            </h2>

            <div className="my_div my_bg">
            </div>

            <button onClick={goHome}>Next</button>
            <div>
                테스트 공유하기
            </div>
            <div>
                
                <Share />
            </div>

        </div>
        </BrowserRouter>
    );
}

export default Home;
import React, { useState, useEffect } from 'react';
import Question from "./Question";
import { useLocation } from "react-router-dom";
import Share from './share';

const Result = () => {

    const location = useLocation()
    
    const [blogs, setBlogs] = useState([
        { Type: 'ENFP', info1: '1 ipsum...', info2: '1', id: 1 },
        { Type: 'ISFP', info1: '2 ipsum...', info2: '1', id: 1 },
        { Type: 'N', info1: '3 ipsum...', info2: '1', id: 1 },
        { Type: 'N', info1: '4 ipsum...', info2: '1', id: 1 },
        { Type: 'N', info1: '5 ipsum...', info2: '1', id: 1 },
        { Type: 'N', info1: '6 ipsum...', info2: '1', id: 1 },
        { Type: 'N', info1: '1 ipsum...', info2: '1', id: 1 },
        { Type: 'N', info1: '1 ipsum...', info2: '1', id: 1 },
    ])
    let index =0
    for (let i = 0 ; i< blogs.length; i++){
        if(blogs[i].Type == location.data)
            index = i
    }

    return (
        <div>
            {blogs[index].info1}
            <div className="home">
                

                <div className="my_div my_bg">
                </div>

                <h2>
                    아래는 설명
                </h2>

                <div className="my_div my_bg">
                </div>

                <h2>
                    아래는 상품정보
                </h2>
                <div className="nextdiv">

                </div>
                <h2>
                    테스트 공유하기
                </h2>
                <div className="sharediv">
                    <Share />
                </div>


            </div>
        </div>
        
    );
  }
   
  export default Result;
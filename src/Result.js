import React, { useState, useEffect } from 'react';
import Question from "./Question";
import { useLocation } from "react-router-dom";


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
        </div>
    );
  }
   
  export default Result;
import React, { useState, useEffect } from 'react';
import { useHistory  } from 'react-router-dom';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import ProgressBar from "@ramonak/react-progress-bar";


const Question = () => {
    var NorS = 0
    var EorI = 0
    var TorF = 0
    var JorP = 0
    var MBTI = ""

    const history = useHistory();
    const [index, setIndex] = useState(0);
    const [barpercent, setBarpercent] = useState(0);

    const [blogs, setBlogs] = useState([{ Category: 'N/S', Type: 'N', Qtype1: '1 ipsum...', Qtype2: '1', id: 1 },
    { Category: 'N/S', Type: 'S', Qtype1: '2 ipsum...', Qtype2: '2', id: 2 },
    { Category: 'N/S', Type: 'T', Qtype1: '3 ipsum...', Qtype2: '3', id: 3 },
    { Category: 'N/S', Type: 'F', Qtype1: '4 ipsum...', Qtype2: '4', id: 4 },
    { Category: 'N/S', Type: 'J', Qtype1: '5 ipsum...', Qtype2: '5', id: 5 },
    { Category: 'N/S', Type: 'P', Qtype1: '6 ipsum...', Qtype2: '6', id: 6 },
    { Category: 'N/S', Type: 'N', Qtype1: '7 ipsum...', Qtype2: '7', id: 7 },
    { Category: 'N/S', Type: 'S', Qtype1: '8 ipsum...', Qtype2: '8', id: 1 },
    { Category: 'N/S', Type: 'S', Qtype1: '2 ipsum...', Qtype2: '2', id: 2 },
    { Category: 'N/S', Type: 'T', Qtype1: '3 ipsum...', Qtype2: '3', id: 3 },
    { Category: 'N/S', Type: 'F', Qtype1: '4 ipsum...', Qtype2: '4', id: 4 },
    { Category: 'N/S', Type: 'J', Qtype1: '5 ipsum...', Qtype2: '5', id: 5 },
    { Category: 'N/S', Type: 'P', Qtype1: '6 ipsum...', Qtype2: '6', id: 6 },
    { Category: 'N/S', Type: 'N', Qtype1: '7 ipsum...', Qtype2: '7', id: 7 },
    { Category: 'N/S', Type: 'S', Qtype1: '8 ipsum...', Qtype2: '8', id: 1 }
])
    
    const changeQuestion = () => {
        //db에서 가져오기 

        if(index<11){
            switch (blogs[index].Type) {
            case "N":
                NorS += 1
            //   alert( NorS );
              break;
            case "E":
                EorI += 1
            //   alert( EorI );
              break;
            case "T":
                TorF += 1
            //   alert( TorF);
              break;
            case "J":
                JorP += 1
            //   alert( JorP);
              break;
                
            default:
            //   alert( "어떤 값인지 파악이 되지 않습니다." );
          } 

        setIndex(index + 1)
        setBarpercent(barpercent + 9)
        }
        else{
            calMBTI()
            history.push({
                pathname:'/result',
                data: MBTI,
            
            })
        }
        
    }

    const calMBTI = () => {
        if(EorI >=2)
            MBTI += "E"
        else   
            MBTI += "I"

        if(NorS >=2)
            MBTI += "N"
        else   
            MBTI += "S"
        if(TorF >=2)
            MBTI += "T"
        else   
            MBTI += "F"
        if(JorP >=2)
            MBTI += "J"
        else   
            MBTI += "P"

    }

    // useEffect( () => {
    //     fetch('http://localhost:8000/data')
    //     .then(res => {
    //         return res.json();
    //     })
    //     .then( (data) => {
    //         console.log(data)
    //         setBlogs(data)

    //     }) 
    // }, [])

    return (
        <div className="home">
            <ProgressBar completed={barpercent} />
            <div className="my_div my_bg">
            </div>
            <h2>
                어쩌구저쩌구
            </h2>

            <button className = "question_bt" onClick={changeQuestion}>
                {blogs[index].Qtype1}
            </button>
            <button className = "question_bt" onClick={changeQuestion}>
                {blogs[index].Qtype2}
            </button>
        </div>
    );
}


export default Question;
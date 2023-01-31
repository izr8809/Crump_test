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

    const [blogs, setBlogs] = useState(null)
    
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

    useEffect( () => {
        fetch('/data')
        .then(res => {
            return res.json();
        })
        .then( (data) => {
            console.log(data)
            setBlogs(data)

        }) 
    }, [])

    return (
        <div className="home">
            <ProgressBar completed={barpercent} />
            <div className="my_div my_bg">
            </div>
            <h2>
                1212{blogs && blogs[index].Story}
            </h2>

            <button className = "question_bt" onClick={changeQuestion}>
                {blogs && blogs[index].Qtype1}
            </button>
            <button className = "question_bt" onClick={changeQuestion}>
                {blogs && blogs[index].Qtype2}
            </button>
        </div>
    );
}


export default Question;
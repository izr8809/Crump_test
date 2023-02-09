import React, { useState, useEffect } from 'react';
import { useHistory  } from 'react-router-dom';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import ProgressBar from "@ramonak/react-progress-bar";


const Question = () => {
    const [NorS, setNorS] = useState(0);
    const [EorI, setEorI] = useState(0);
    const [TorF, setTorF] = useState(0);
    const [JorP, setJorP] = useState(0);
    const [MBTI, setMBTI] = useState("");
    var x = 0;
    var y = 0;
    var z = 0;
    var r = 0;
    var q = "";
    const history = useHistory();
    const [index, setIndex] = useState(0);
    const [barpercent, setBarpercent] = useState(0);
    const [blogs, setBlogs] = useState(null)
    
    const changeQuestion = () => {
        //db에서 가져오기 

        if(index<11){
            switch (blogs[index].Type) {
            case "N":
                setNorS(NorS +1)
              break;
            case "E":
                setEorI(EorI +1)
            //   alert( EorI );
              break;
            case "T":
                setTorF(TorF +1)
            //   alert( TorF);
              break;
            case "J":
                setJorP(JorP +1)
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
                pathname:`/result/${q}`,
                data: q,
            
            })
        }
        
    }
    const changeQuestion2 = () => {
        //db에서 가져오기 

        if(index<11){
            setIndex(index + 1)
            setBarpercent(barpercent + 9)
        }
        else{
            calMBTI()
            history.push({
                pathname:`/result/${q}`,
                data: q,
            
            })
        }
        
    }

    const calMBTI = () => {
        // alert(NorS + EorI + TorF + JorP)
        if(EorI >=2 ||  x >=2){
            // setMBTI(MBTI + "E")
            q += "E"
        }
        else   {
            setMBTI(MBTI + "I")
            q += "I"

        }
        if(NorS >=2 ||  y >=2)
            q += "N"
        else  
            q += "S"
        if(TorF >=2 ||  z >=2)
            q += "T"
        else   
            q += "F"
        if(JorP >=2 ||  r >=2)
            q += "J"
        else   
            q += "P"

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
    useEffect( () => {
    }, [NorS, MBTI])

    return (
        <div className="home">
            <ProgressBar completed={barpercent} />
            <div className='question_div'>
                <div className='question_story'>
                    <text>{blogs && blogs[index].Story}</text>
                    

            </div>

                </div>
            <button className = "question_bt" onClick={changeQuestion}>
                {blogs && blogs[index].Qtype1}
            </button>
            <button className = "question_bt" onClick={changeQuestion2}>
                {blogs && blogs[index].Qtype2}
            </button>
        </div>
    );
}


export default Question;
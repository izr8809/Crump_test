import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import Share from './share';
import Modal from './Modal';


const Result = () => {

    const location = useLocation()
    const [openModal, openModalSet] = useState(true);

    // useEffect( () => {
    //   openModalSet(true)
    // })
    const [index, setIndex] = useState(0) 
    const [blogs, setBlogs] = useState(null)


    useEffect( () => {
        fetch('/resultdata')
        .then(res => {
            return res.json();
        })
        .then( (data) => {
            console.log(data)
            setBlogs(data)
            
            for (let i = 0 ; i< data.length; i++){
                if(data[i].Type === location.data)
                    setIndex(i)
            }

        }) 
        


    }, [])

    return (
        <div>
            <div className="home">
                {/* <button onClick={openModalSet(true)}>123 </button> */}

                {openModal && <Modal setOpenModal={openModalSet} /> }
                
                <div className="my_div">
                    <img className="my_bg" src = {`img/${location.data}.jpg`}>
                    </img>
                    
                    <div className='character_info'>
                        <div>
                                <li>{blogs && blogs[index].Info2}</li>
                                <li>{blogs && blogs[index].Info3}</li>
                                <li>{blogs && blogs[index].Info4}</li>
                                <li>{blogs && blogs[index].Info5}</li>
                                <li>찰떡궁합 {blogs && blogs[index].Best}</li>
                                <li>상극 {blogs && blogs[index].Worst}</li>

                        </div>
                    </div>
                </div>
                    

                
                <div className="sharediv">
                    <Share />
                </div>


            </div>
        </div>
        
    );
  }
   
  export default Result;
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Share from "./share";
import { useParams } from "react-router-dom";
import Modal from "./Modal";

const Result = (props) => {
  const location = useLocation();
  const [openModal, openModalSet] = useState(true);
  const params = useParams()

  // useEffect( () => {
  //   openModalSet(true)
  // })
  const [index, setIndex] = useState(0);
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("/resultdata")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBlogs(data);

        for (let i = 0; i < data.length; i++) {
          if (data[i].Type === params.MBTI) setIndex(i);
        }
      });
  }, []);

  return (
    <div>
      <div className="home">
        {/* <button onClick={openModalSet(true)}>123 </button> */}

        {/* {openModal && <Modal setOpenModal={openModalSet} /> } */}

        <div className="my_div">
          <img className="my_bg" src={`../img/${params.MBTI}.jpg`} alt={"no imaage"} />
          <div className="TESTER4">
            <text>
              {location.data} {blogs && blogs[index].name}
            </text>
          </div>
          <div className="TESTER5">
            <text> (MBTI 출처 : 하입비스트)</text>
          </div>

          <div className="character_info">
            <div>
              <ul>
                <li>
                  {" "}
                  <span>{blogs && blogs[index].Info2}</span>
                </li>
                <li>
                  {" "}
                  <span>{blogs && blogs[index].Info3}</span>
                </li>
                <li>
                  {" "}
                  <span>{blogs && blogs[index].Info4}</span>
                </li>
                <li>
                  {" "}
                  <span>{blogs && blogs[index].Info5}</span>
                </li>
                <li>
                  {" "}
                  <span>{blogs && blogs[index].Info2}</span>
                </li>
                <li>
                  <span>
                    {" "}
                    찰떡궁합 {blogs && blogs[index].Best} 상극{" "}
                    {blogs && blogs[index].Worst}{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="TESTER2">
            <text> &#128161; 추천 상품</text>
          </div>
          <div className="TESTER6">
            <text> 아래 이미지 클릭시, 상품 링크로 이동</text>
          </div>
          <a href="https://crump.co.kr/">
            <img className="my_bg" src={`../img/${params.MBTI}_clo.jpg`}alt={"no imaage"} />
          </a>
        </div>

        <div className="TESTER_share">
          <text>&#127752; 공유하기 </text>
        </div>
        <div className="sharediv">
          <Share />
        </div>
      </div>
    </div>
  );
};

Result.defaultProps = {
  name: "no name",
};

export default Result;

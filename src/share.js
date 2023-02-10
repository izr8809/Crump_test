import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
// import logo from './img/url2.png';

import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon,
} from "react-share";


URL = "http://35.247.42.172:5000/"
const URLShareButton = styled.button`
	// width: 48px;
	// height: 48px;
	color: white;
	// border-radius: 24px;
	// border: 0px;
	font-weight: 800;
	font-size: 18px;
	cursor: pointer;
	// background-color: #7362ff;
	// &:hover {
	// 	background-color: #a99fee;
	// }
`;


export default function Share() {
    
  const location = useLocation();
	const currentUrl = window.location.href;
  console.log(currentUrl)
  URL = currentUrl
  return (
    
    <>
    
    <Helmet>
        <title>크럼프 래퍼 테스트</title>
        <meta
          name="description"
          content="Beginner friendly page for learning React Helmet."
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="1분 만에 만드는 노션 웹사이트, 우피!"
        />
        <meta
          property="og:description"
          content="우피는 노션 페이지를 최적화된 웹사이트로 바꿔드립니다. 원하는 주소를 연결하여 나만의 홈페이지를 시작해 보세요."
        />
        <meta
          property="og:image"
          content="https://oopy.lazyrockets.com/api/rest/cdn/image/a763e278-d990-4beb-b3b2-0861ec4e4d99.png"
        />
      </Helmet>
      <div className="icon">
        <FacebookShareButton style={{ marginRight: "20px" }} url={URL}>
          <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
        </FacebookShareButton>
      </div>
      <LineShareButton style={{ marginRight: "20px" }} url={URL}>
        <LineIcon size={48} round={true} borderRadius={24}></LineIcon>
      </LineShareButton>
      <TwitterShareButton style={{ marginRight: "20px" }} url={URL}>
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>
      <CopyToClipboard text={URL} >
        <a onClick={() => {alert("링크가 복사되었습니다")}}>
          <img style = {{ marginBottom:"3px", marginLeft: "5px"}} src="../img/url2.png" alt="" />
        </a>
      </CopyToClipboard>
    </>
  )
}
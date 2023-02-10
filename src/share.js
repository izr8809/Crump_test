import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
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
import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import styled from "styled-components";

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

const URLShareButton = styled.button`
	width: 48px;
	height: 48px;
	color: white;
	border-radius: 24px;
	border: 0px;
	font-weight: 800;
	font-size: 18px;
	cursor: pointer;
	background-color: #7362ff;
	&:hover {
		background-color: #a99fee;
	}
`;

export default function Share() {
    
	const currentUrl = window.location.href;
  return (
    <>
      <FacebookShareButton style={{ marginRight: "20px" }} url={"localhost:3000"}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <FacebookMessengerShareButton style={{ marginRight: "20px" }} url={"localhost:3000"}>
        <FacebookMessengerIcon size={48} round={true} borderRadius={24}></FacebookMessengerIcon>
      </FacebookMessengerShareButton>
      <TwitterShareButton style={{ marginRight: "20px" }} url={"localhost:3000"}>
        <TwitterIcon size={48} round={true} borderRadius={24}></TwitterIcon>
      </TwitterShareButton>
      <CopyToClipboard style={{ marginTop: "0px" }} text={"localhost:3000"}>
        <URLShareButton>URL</URLShareButton>
      </CopyToClipboard>
    </>
  )
}
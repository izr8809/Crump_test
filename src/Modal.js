import React from "react";
import "./Modal.scss";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>크럼프 20% 할인 쿠폰이 발급되었습니다</h1>
        </div>
        <div className="body">
          <p> 크럼프 할인 쿠폰이 발급되었습니다.!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <a href ="https://www.crump.co.kr/">
            <button >Go Crump</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Modal;
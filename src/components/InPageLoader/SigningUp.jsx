import React from "react";

import {
  loader,
  loadInner,
  loadOne,
  loadTwo,
  loadThree,
  text,
  spinner,
} from "@/css/loaderInPage.module.css";

const SigningUp = () => {
  return (
    <>
      <div className={loader}>
        <div className={`${loadInner} ${loadOne}`}></div>
        <div className={`${loadInner} ${loadTwo}`}></div>
        <div className={`${loadInner} ${loadThree}`}></div>
        <span className={text}>
          <div className={spinner}>
            <span>S</span>
            <span>I</span>
            <span>G</span>
            <span>N</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span className="text-white">|</span>
            <br />
            <span>U</span>
            <span>P</span>
          </div>
        </span>
      </div>
    </>
  );
};

export default SigningUp;

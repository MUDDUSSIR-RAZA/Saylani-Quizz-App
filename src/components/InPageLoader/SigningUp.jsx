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
      <div class={loader}>
        <div class={`${loadInner} ${loadOne}`}></div>
        <div class={`${loadInner} ${loadTwo}`}></div>
        <div class={`${loadInner} ${loadThree}`}></div>
        <span class={text}>
          <div class={spinner}>
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

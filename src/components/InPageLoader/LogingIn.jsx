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

const LogingIn = () => {
  return (
    <>
      <div class={loader}>
        <div class={`${loadInner} ${loadOne}`}></div>
        <div class={`${loadInner} ${loadTwo}`}></div>
        <div class={`${loadInner} ${loadThree}`}></div>
        <span class={text}>
          <div class={spinner}>
            <span>L</span>
            <span>O</span>
            <span>G</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
            <span className="text-white">|</span>
            <br />
            <span>I</span>
            <span>N</span>
          </div>
        </span>
      </div>
    </>
  );
};

export default LogingIn;

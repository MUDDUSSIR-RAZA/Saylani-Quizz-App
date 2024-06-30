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

const Adding = () => {
  return (
    <>
      <div class={loader}>
        <div class={`${loadInner} ${loadOne}`}></div>
        <div class={`${loadInner} ${loadTwo}`}></div>
        <div class={`${loadInner} ${loadThree}`}></div>
        <span class={text}>
          <div class={spinner}>
            <span>A</span>
            <span>D</span>
            <span>D</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        </span>
      </div>
    </>
  );
};

export default Adding;

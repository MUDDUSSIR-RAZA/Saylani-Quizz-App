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

const Creating = () => {
  return (
    <>
      <div className={loader}>
        <div className={`${loadInner} ${loadOne}`}></div>
        <div className={`${loadInner} ${loadTwo}`}></div>
        <div className={`${loadInner} ${loadThree}`}></div>
        <span className={text}>
          <div className={spinner}>
            <span>C</span>
            <span>R</span>
            <span>E</span>
            <span>A</span>
            <span>T</span>
            <span>I</span>
            <span>N</span>
            <span>G</span>
          </div>
        </span>
      </div>
    </>
  );
};

export default Creating;

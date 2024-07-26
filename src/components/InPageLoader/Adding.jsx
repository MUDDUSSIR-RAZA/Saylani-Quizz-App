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
      <div className={loader}>
        <div className={`${loadInner} ${loadOne}`}></div>
        <div className={`${loadInner} ${loadTwo}`}></div>
        <div className={`${loadInner} ${loadThree}`}></div>
        <span className={text}>
          <div className={spinner}>
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

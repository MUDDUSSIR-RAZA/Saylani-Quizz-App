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

const UploadingBulkFile = () => {
  return (
    <>
      <div class={loader}>
        <div class={`${loadInner} ${loadOne}`}></div>
        <div class={`${loadInner} ${loadTwo}`}></div>
        <div class={`${loadInner} ${loadThree}`}></div>
        <span class={text}>
          <div class={spinner}>
            <span>U</span>
            <span>P</span>
            <span>L</span>
            <span>O</span>
            <span>A</span>
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

export default UploadingBulkFile;

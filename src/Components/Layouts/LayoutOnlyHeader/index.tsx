import React from "react";
import Header from "../Components/Header";
const LayoutOnlyHeader = ({ children }: any) => {
  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default LayoutOnlyHeader;

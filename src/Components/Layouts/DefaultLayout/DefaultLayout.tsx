import React from "react";
import classNames from "classnames/bind";

import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);
const DefaultLayout = ({ children }: any) => {
  return (
    <div className={cx("default-layout")}>
      <Header></Header>
      <div className={cx("container")}>
        <SideBar></SideBar>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;

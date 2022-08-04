import React from "react";
import classNames from "classnames/bind";

import Header from "../Components/Header";
import styles from "./index.module.scss";

const cx = classNames.bind(styles);
const LayoutOnlyHeader = ({ children }: any) => {
  return (
    <div className={cx("layout-only-header")}>
      <Header></Header>
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
};

export default LayoutOnlyHeader;

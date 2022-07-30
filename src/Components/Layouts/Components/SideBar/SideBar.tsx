import React from "react";
import classNames from "classnames/bind";

import styles from "./SideBar.module.scss";
const cx = classNames.bind(styles);
const SideBar = () => {
  return <div className={cx("wrapper")}>SiBar</div>;
};

export default SideBar;

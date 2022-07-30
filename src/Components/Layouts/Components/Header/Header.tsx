import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import clsx from "clsx/";
import { ok } from "assert";

const cx = classNames.bind(styles);
const Header = () => {
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}></div>
    </header>
  );
};

export default Header;

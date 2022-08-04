import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);
const MenuHeader = ({ title, onBack }: any) => {
  return (
    <div className={cx("menu-header")}>
      <button
        onClick={() => {
          onBack();
        }}
        title="menu-header__back"
        className={cx("menu-header__back")}
      >
        <IoIosArrowBack></IoIosArrowBack>
      </button>
      <span className={cx("menu-header-title")}>{title}</span>
    </div>
  );
};

export default MenuHeader;

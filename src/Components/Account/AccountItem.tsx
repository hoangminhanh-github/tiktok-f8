import React from "react";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";
import { AiFillCheckCircle } from "react-icons/ai";
const cx = classNames.bind(styles);
const AccountItem = () => {
  return (
    <div className={cx("wrapper")}>
      <img
        src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
        className={cx("avatar")}
        alt=""
      />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>Nguyen Van A</span>
          <AiFillCheckCircle className={cx("icon")}></AiFillCheckCircle>
        </p>
        <span className={cx("username")}>nguyenvana</span>
      </div>
    </div>
  );
};

export default AccountItem;

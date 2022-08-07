import React from "react";
import classNames from "classnames/bind";

import styles from "./AccountItem.module.scss";
import { AiFillCheckCircle } from "react-icons/ai";
const cx = classNames.bind(styles);
const AccountItem = ({ data }: any) => {
  return (
    <div className={cx("wrapper")}>
      <img src={data.avatar} className={cx("avatar")} alt="" />
      <div className={cx("info")}>
        <p className={cx("name")}>
          <span>{data.first_name}</span>
          {data.tick && (
            <AiFillCheckCircle className={cx("icon")}></AiFillCheckCircle>
          )}
        </p>
        <span className={cx("username")}>{data.full_name}</span>
      </div>
    </div>
  );
};

export default AccountItem;

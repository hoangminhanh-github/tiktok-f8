import React from "react";
import classNames from "classnames/bind";

import Button from "../../Button";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);
interface IProps {
  data: { title: string; icon: JSX.Element; to?: string };
  onClick: () => void;
}
const MenuItem = ({ data, onClick }: any) => {
  return (
    <Button
      href={data.href}
      to={data.to}
      className={cx("menu-item", {
        separate: data.separate,
      })}
      leftIcon={data.icon}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;

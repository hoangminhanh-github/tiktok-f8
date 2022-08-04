import React from "react";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";

import styles from "./Button.module.scss";

const cx = classNames.bind(styles);
const Button = ({
  to,
  href,
  primary,
  outline,
  small,
  medium,
  large,
  children,
  disable,
  leftIcon,
  rightIcon,
  className,
  onClick,
  ...passProps
}: any) => {
  const props = {
    to,
    href,
    onClick,
    ...passProps,
  };

  // Remove event when btn is disable
  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }
  const classes = cx("wrapper", {
    primary,
    outline,
    small,
    medium,
    large,
    [className]: className,
    disable,
  });
  return (
    <>
      {to && (
        <Link className={classes} {...props}>
          {leftIcon && <span className={cx("icon")}> {leftIcon}</span>}
          <span className={cx("title")}>{children}</span>
          {rightIcon && <span className={cx("icon")}> {rightIcon}</span>}
        </Link>
      )}
      {href && (
        <a className={classes} {...props}>
          {leftIcon && <span className={cx("icon")}> {leftIcon}</span>}
          <span className={cx("title")}>{children}</span>
          {rightIcon && <span className={cx("icon")}> {rightIcon}</span>}
        </a>
      )}
      {!href && !to && (
        <button className={classes} {...props}>
          {leftIcon && <span className={cx("icon")}> {leftIcon}</span>}
          <span className={cx("title")}>{children}</span>
          {rightIcon && <span className={cx("icon")}> {rightIcon}</span>}
        </button>
      )}
    </>
  );
};

export default Button;

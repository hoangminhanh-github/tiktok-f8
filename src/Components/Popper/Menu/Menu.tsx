import React, { useState } from "react";
import classNames from "classnames/bind";

import styles from "./Menu.module.scss";
import Tippy from "@tippyjs/react/headless";
import Popper from "../Popper";
import MenuItem from "./MenuItem";
import MenuHeader from "./MenuHeader";

const cx = classNames.bind(styles);
export interface IMenu {
  children: any;
  items: any;
}

const Menu = ({ children, items }: any) => {
  const [history, setHistory] = useState<any>([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current?.data.map((item: any, index: any) => {
      const isParents = !!item.children;
      return (
        <MenuItem
          data={item}
          key={index}
          onClick={() => {
            if (isParents) {
              setHistory((prev: any) => [...prev, item.children]);
              // console.log(item.children.data);
            } else {
              console.log(item);
            }
          }}
        ></MenuItem>
      );
    });
  };
  console.log(history);
  return (
    <Tippy
      delay={[0, 300]}
      offset={[12, 8]}
      placement="bottom-end"
      interactive
      render={(attrs) => (
        <div className={cx("more-list")} tabIndex={-1} {...attrs}>
          <Popper>
            {history.length > 1 && (
              <MenuHeader
                title={"language"}
                onBack={() => {
                  setHistory((prev: any) => prev.slice(0, prev.length - 1));
                }}
              ></MenuHeader>
            )}
            {renderItems()}
          </Popper>
        </div>
      )}
      onHide={() => setHistory((prev: any) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
};

export default Menu;

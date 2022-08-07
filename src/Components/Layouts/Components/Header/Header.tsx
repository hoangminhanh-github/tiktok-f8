import React, { useState, Fragment } from "react";
import clsx from "clsx/";
import classNames from "classnames/bind";
import {
  AiFillCloseCircle,
  AiFillMessage,
  AiOutlineCloudUpload,
  AiOutlineLoading3Quarters,
  AiOutlineMore,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiMessageAltMinus } from "react-icons/bi";
import { IoMdLogIn } from "react-icons/io";
import HeadLessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import { Link } from "react-router-dom";

import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import Popper from "../../../Popper";
import AccountItem from "../../../Account/AccountItem";
import Button from "../../../Button";
import Menu from "../../../Popper/Menu";
import { MENU_ITEM, USER_MENU } from "../../../../utils/menu-item";
import Search from "./Search/Search";
import { ROUTES } from "../../../../config/Router";
const cx = classNames.bind(styles);
const Header = () => {
  const [currentUser, setCurrentUser] = useState(true);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={ROUTES.home} className={cx("logo")}>
          <img src={images.logo} alt="tiktok" />
        </Link>

        {/* search */}
        <Search></Search>
        <div className={cx("action")}>
          {currentUser ? (
            <>
              <Tippy
                animation="scale"
                content="Upload video"
                placement="bottom"
              >
                <button className={cx("icon")} title="Upload">
                  <AiOutlineCloudUpload></AiOutlineCloudUpload>
                </button>
              </Tippy>
              <Tippy animation="scale" content="Message">
                <button className={cx("icon")} title="mess">
                  <BiMessageAltMinus></BiMessageAltMinus>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button>
                <Link to="/" className={cx("link")}>
                  Upload
                </Link>
              </Button>
              <Button primary rightIcon={<IoMdLogIn></IoMdLogIn>}>
                <span> Login</span>
              </Button>
            </>
          )}
          <Menu items={currentUser ? USER_MENU : MENU_ITEM}>
            {currentUser ? (
              <img
                className={cx("avatar")}
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/1191bdad8844c55d6e8144494944c65f~c5_100x100.jpeg?x-expires=1659754800&x-signature=9oeSR0QZtsVT2d34qFYySUPMe14%3D"
                alt="avatar"
              ></img>
            ) : (
              <button className={cx("btn-more")} title="menu">
                <AiOutlineMore className={cx("more-icons")}></AiOutlineMore>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import {
  AiFillCloseCircle,
  AiOutlineLoading3Quarters,
  AiOutlineSearch,
} from "react-icons/ai";
import HeadLessTippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import styles from "./Search.module.scss";
import Popper from "../../../../Popper";
import AccountItem from "../../../../Account/AccountItem";
import useDebounce from "../../../../../hook/useDebounce";
const cx = classNames.bind(styles);

const Search = () => {
  const [searchValue, setSearchValue] = useState<any>();
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [iconLoading, setIconLoading] = useState(false);
  const inputRef = useRef<any>();

  const debounce = useDebounce(searchValue, 800);
  const handleHideResults = () => {
    setShowResult(false);
  };
  useEffect(() => {
    if (debounce?.trim()) {
      setIconLoading(true);
      fetch(
        `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
          debounce
        )}&type=less`
      )
        .then((res) => res.json())
        .then((res) => {
          setSearchResult(res.data);
          setIconLoading(false);
        })
        .catch(() => {
          setIconLoading(false);
        });
    }
  }, [debounce]);
  // console.log(debounce);
  return (
    <>
      <HeadLessTippy
        placement="bottom-start"
        interactive
        onClickOutside={handleHideResults}
        visible={showResult && searchResult?.length >= 1}
        render={(attrs) => (
          <div className={cx("search-result")} tabIndex={-1} {...attrs}>
            <Popper>
              {/* <AccountItem></AccountItem>
              <AccountItem></AccountItem>
              <AccountItem></AccountItem> */}
              {searchResult?.map((item: any) => (
                <AccountItem data={item}></AccountItem>
              ))}
            </Popper>
          </div>
        )}
        // search area
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            type="text"
            placeholder="Tìm kiếm tài khoản và video"
            spellCheck="false"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            onFocus={() => {
              setShowResult(true);
            }}
          />

          {!iconLoading && searchValue && (
            <button
              className={cx("search-icon")}
              onClick={() => {
                setSearchValue("");
                inputRef.current.focus();
                setSearchResult([]);
              }}
            >
              {/* clear */}
              <AiFillCloseCircle></AiFillCloseCircle>
            </button>
          )}
          {iconLoading && (
            <button className={cx("loading")}>
              {/* loading */}
              <AiOutlineLoading3Quarters
                className={cx("iconLoading")}
              ></AiOutlineLoading3Quarters>
            </button>
          )}

          <span className={cx("line")}></span>
          <button title="search-btn" className={cx("search-btn")}>
            <AiOutlineSearch></AiOutlineSearch>
          </button>
        </div>
      </HeadLessTippy>
    </>
  );
};

export default Search;

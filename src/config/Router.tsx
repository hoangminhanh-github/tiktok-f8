import React, { ExoticComponent, Fragment, ReactNode } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Following from "../Pages/Following/Following";
import Upload from "../Pages/Upload/Upload";
import LayoutOnlyHeader from "../Components/Layouts/LayoutOnlyHeader";
import Search from "../Pages/Search/Search";

export interface IRoutes {
  path: string;
  component: JSX.Element;
  layout?: ({ children }: any) => JSX.Element | any;
}

export const ROUTES = {
  home: "/",
  following: "/following",
  upload: "/upload",
  search: "/search",
};

export const publicRoutes = [
  { path: ROUTES.home, component: <Home></Home> },
  { path: ROUTES.following, component: <Following></Following> },
  {
    path: ROUTES.upload,
    component: <Upload></Upload>,
    layout: LayoutOnlyHeader,
  },
  {
    path: ROUTES.search,
    component: <Search></Search>,
    layout: Fragment,
  },
];

export const privateRoutes = [];

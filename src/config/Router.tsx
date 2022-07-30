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

export const publicRoutes = [
  { path: "/", component: <Home></Home> },
  { path: "/following", component: <Following></Following> },
  {
    path: "/upload",
    component: <Upload></Upload>,
    layout: LayoutOnlyHeader,
  },
  {
    path: "search",
    component: <Search></Search>,
    layout: Fragment,
  },
];

export const privateRoutes = [];

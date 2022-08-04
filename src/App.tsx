import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import ReactDOM from "react-dom/client";
import { IRoutes, publicRoutes } from "./config/Router";
import DefaultLayout from "./Components/Layouts/DefaultLayout";
import LayoutOnlyHeader from "./Components/Layouts/LayoutOnlyHeader";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route: IRoutes, index) => {
            const Layout = route.layout ? route.layout : DefaultLayout;

            return (
              <Route
                key={index}
                path={route.path}
                element={<Layout>{route.component}</Layout>}
              ></Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

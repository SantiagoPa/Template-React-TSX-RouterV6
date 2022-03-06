import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";

import { LazyPages1, LazyPages2, LazyPages3 } from "../01-lazyload/pages/";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="flex ">
        <nav className="flex flex-col justify-start items-center bg-purple-900 h-screen">
          <img className="h-32 mt-24" src={logo} alt="react logo" />

          <ul className="flex flex-col gap-y-4 text-2xl">
            <li>
              <NavLink
                to="/lazy1"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                Lazy 1
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy2"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                Lazy 2
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lazy3"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                Lazy 3
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/lazy3"
            element={ <LazyPages3 /> }
          />
          <Route
            path="/lazy2"
            element={ <LazyPages2 />}
          />
          <Route
            path="/lazy1"
            element={ <LazyPages1 /> }
          />
          <Route path="/*" element={<Navigate to="/lazy1" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

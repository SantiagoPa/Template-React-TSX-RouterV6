import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="flex ">
        <nav className="flex flex-col justify-start items-center bg-purple-900 h-screen">
          <img className="h-32 mt-24" src={logo} alt="react logo" />

          <ul className="flex flex-col gap-y-4 text-2xl">
            <li className="text-center">
              <NavLink
                to="/home"
                className={({ isActive }) => (isActive ? "text-gray-400 text-center" : "")}
              >
                Shopping
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                about
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/other"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                other
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="other"
            element={<h1 className="flex-1">Other element</h1>}
          />
          <Route
            path="about"
            element={<h1 className="flex-1">about element</h1>}
          />
          <Route
            path="home"
            element={<h1>Home element</h1>}
          />
          <Route path="/*" element={<Navigate to="/home" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

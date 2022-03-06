import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { LazyPages1, LazyPages2, LazyPages3 } from "../pages";

export const LazyLayout = () => {
  return (
    <div className="flex-1 flex justify-center items-center bg-purple-400">
      <div className="flex flex-col gap-y-5">
        <h1 className="text-5xl"> LazyLayout Page </h1>
        <ul className="flex flex-row gap-x-5 justify-center items-center">
          <li>
            <NavLink
              to="lazy1"
              className={({ isActive }) => (isActive ? "text-gray-800" : "")}
            >
              lazy 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="lazy2"
              className={({ isActive }) => (isActive ? "text-gray-800" : "")}
            >
              lazy 2
            </NavLink>
          </li>
          <li>
            <NavLink
              to="lazy3"
              className={({ isActive }) => (isActive ? "text-gray-800" : "")}
            >
              lazy 3
            </NavLink>
          </li>
        </ul>

        <Routes>
            <Route path="lazy1" element={ <LazyPages1 /> } />
            <Route path="lazy2" element={ <LazyPages2 /> } />
            <Route path="lazy3" element={ <LazyPages3 /> } />

            {/* <Route path="*" element={ <div> Not found </div> } /> */}
            <Route path="*" element={ <Navigate replace to="lazy1" /> } />
        </Routes>
      </div>
    </div>
  );
};

export default LazyLayout;

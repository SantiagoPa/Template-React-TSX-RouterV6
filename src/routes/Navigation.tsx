import { Suspense } from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { routes } from "./routes";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <Suspense fallback={ <span className='flex justify-center w-screen text-2xl bg-red-300 text-white'>loading...</span> } >

      <BrowserRouter>
        <div className="flex ">
          <nav className="flex flex-col justify-start items-center bg-purple-900 h-screen">
            <img className="h-32 mt-24" src={logo} alt="react logo" />

            <ul className="flex flex-col gap-y-4 text-2xl">
              {
                routes.map( ({ to,name }) => (
                  <li key={ to }>
                    <NavLink 
                      to={ to }
                      className={ ({isActive}) => (isActive) ? 'text-gray-400' : '' }
                    >
                        { name }
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </nav>

          <Routes>
            {
              routes.map( ({ path, Component , to }) => (
                <Route
                  key={ to } 
                  path={ path }
                  element={ <Component /> }
                />
              ))
            }
            <Route path="/*" element={<Navigate to={ routes[0].to } replace />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};

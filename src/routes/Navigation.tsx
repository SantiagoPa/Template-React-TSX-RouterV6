import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import {
  FormikAbstraction,
  FormikBasicPage,
  FormikComponents,
  FormikYupPages,
  RegisterPage,
  RegisterFormikPage,
  DynamicForm,
} from "../03-forms/pages/";

import logo from "../logo.svg";

export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="flex ">
        <nav className="flex flex-col justify-start items-center bg-purple-900 h-screen p-2">
          <img className="h-32 mt-24" src={logo} alt="react logo" />

          <ul className="flex flex-col gap-y-4 text-2xl">
            <li className="text-center">
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive ? "text-gray-400 text-center" : ""
                }
              >
                Register
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/formik-basic"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                Formik Basic
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/formik-yup"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                Formik Yup
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/formik-components"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                Formik Components
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/formik-abstraction"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                Formik Abstractation
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/formik-register"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                Register Formik
              </NavLink>
            </li>
            <li className="text-center">
              <NavLink
                to="/dynamic-form"
                className={({ isActive }) => (isActive ? "text-gray-400" : "")}
              >
                Dynamic Form
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="formik-basic" element={<FormikBasicPage />} />
          <Route path="formik-yup" element={<FormikYupPages />} />
          <Route path="formik-components" element={<FormikComponents />} />
          <Route path="formik-abstraction" element={<FormikAbstraction />} />
          <Route path="formik-register" element={<RegisterFormikPage />} />
          <Route path="dynamic-form" element={<DynamicForm />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/" element={<h1> endpoint </h1>} />
          <Route path="/*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

import React from "react";
import { Navigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { LOGIN_ROUTE } from "../utils/consts";
const AppRouter = () => {
  return (
    <Routes>
      {authRoutes.map(({ path, Component }) => (
        <Route path={path} key={path} element={<Component />} />
      ))}
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} key={path} element={<Component />} />
      ))}
    </Routes>
  );
};
export default AppRouter;

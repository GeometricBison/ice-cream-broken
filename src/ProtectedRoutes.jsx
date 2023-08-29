import {createContext, useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router";
import { useLocation } from "react-router";
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './redux/user.js';

const useAuth = () => {
  const authStatus = useSelector((state) => state.login.loginStatus)
  return authStatus;
}

const ProtectedRoutes = () => {
  const loaction = useLocation()
  const isAuth = useAuth();
  return isAuth ? <Outlet/> : <Navigate to="/"/>;
};

export default ProtectedRoutes;
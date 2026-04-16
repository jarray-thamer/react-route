import React from "react";
import useAuthStore from "../store/authStore";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  //   Role Protection (admin)
  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;

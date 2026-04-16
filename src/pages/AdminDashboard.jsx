import React from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome {user.email}</p>

      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AdminDashboard;

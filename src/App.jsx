import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import { useState } from "react";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route
        path="/contact"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Contact />
          </ProtectedRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;

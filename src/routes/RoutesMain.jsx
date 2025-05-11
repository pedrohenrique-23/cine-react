import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

const RoutesMain = () => {
  return (
    <Routes>
    {/* Redireciona "/" para "/login" */}
    <Route path="/" element={<Navigate to="/login" />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
    <Route
      path="/dashboard"
      element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
    />
  </Routes>
  );
};

export default RoutesMain;

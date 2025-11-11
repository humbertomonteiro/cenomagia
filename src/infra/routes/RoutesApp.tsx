import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
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
}

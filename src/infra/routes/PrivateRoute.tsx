import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import type { JSX } from "react";

interface PrivateRouteProps {
  children: JSX.Element;
}

export default function PrivateRoute({ children }: PrivateRouteProps) {
  const { user, loading } = useAuth();

  if (loading) return <div>Carregando...</div>;

  return user ? children : <Navigate to="/login" />;
}

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function AdminRoute({ children }) {
    const { token, isAdmin } = useAuth();

    if (!token) return <Navigate to="/login" />;
    if (!isAdmin()) return <Navigate to="/" />;

    return children;
}

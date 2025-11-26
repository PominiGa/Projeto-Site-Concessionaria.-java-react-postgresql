import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

export default function AppRoutes() {
    const { user } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />

            {/* Apenas ADMIN pode acessar */}
            <Route
                path="/admin"
                element={
                    user?.role === "admin"
                        ? <Admin />
                        : <Navigate to="/login" />
                }
            />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

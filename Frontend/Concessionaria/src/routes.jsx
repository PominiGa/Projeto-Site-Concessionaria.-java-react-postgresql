import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Admin from "./pages/Admin";

export default function AppRoutes() {
    const { user } = useAuth();
    const role = localStorage.getItem("role"); 

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route
                path="/admin"
                element={
                    user && role === "ADMIN"
                        ? <Admin />
                        : <Navigate to="/login" />
                }
            />

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

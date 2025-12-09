import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {

    const [user, setUser] = useState(localStorage.getItem("username") || null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const [role, setRole] = useState(localStorage.getItem("role") || null);

    // LOGIN
    const login = async (username, senha) => {
        try {
            const response = await axios.post("http://localhost:8081/auth/login", {
                username,
                senha
            });

            const token = response.data.token;
            const usernameReturned = response.data.username;
            const roleReturned = response.data.role;

            localStorage.setItem("token", token);
            localStorage.setItem("username", usernameReturned);
            localStorage.setItem("role", roleReturned);

            setToken(token);
            setUser(usernameReturned);
            setRole(roleReturned);

            return true;

        } catch (err) {
            console.error("Erro no login:", err);
            return false;
        }
    };

    // REGISTER
    const register = async (username, senha) => {
        try {
            const res = await axios.post("http://localhost:8081/auth/register", {
                username,
                senha
            });

            return res.status === 200 || res.status === 201;
        } catch (err) {
            console.error("Erro no register:", err);
            return false;
        }
    };

    const isAdmin = () => {
        return localStorage.getItem("role") === "ADMIN";
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("role");

        setToken(null);
        setUser(null);
        setRole(null);
    };

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        } else {
            delete axios.defaults.headers.common["Authorization"];
        }
    }, [token]);

    return (
        <AuthContext.Provider value={{ user, role, token, login, logout, register, isAdmin }}>
            {children}
        </AuthContext.Provider>
    );
}

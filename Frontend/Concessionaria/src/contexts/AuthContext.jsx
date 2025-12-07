import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

function parseJwt(token) {
    try {
        const base64Payload = token.split(".")[1];
        const payload = decodeURIComponent(
            atob(base64Payload)
                .split("")
                .map(function (c) {
                    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join("")
        );
        return JSON.parse(payload);
    } catch (e) {
        return null;
    }
}

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            const payload = parseJwt(token);
            if (payload && payload.sub) {
                const username = payload.sub;
                const role = username === "admin" ? "admin" : "cliente";
                setUser({ username, role });
            }
        }
    }, []);

    const login = async (username, password) => {
        try {
            const url = "http://localhost:8080/auth/login";
            const body = { UserName: username, senha: password };
            const res = await axios.post(url, body, { headers: { "Content-Type": "application/json" } });
            const token = res.data;
            if (!token) return false;
            localStorage.setItem("token", token);
            const payload = parseJwt(token);
            const subject = (payload && payload.sub) || username;
            const role = subject === "admin" ? "admin" : "cliente";
            setUser({ username: subject, role });
            return true;
        } catch (err) {
            console.error("Login falhou:", err?.response?.data || err.message);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

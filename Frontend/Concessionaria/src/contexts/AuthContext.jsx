import { createContext, useContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }) {

    const [user, setUser] = useState(localStorage.getItem("username") || null);
    const [token, setToken] = useState(localStorage.getItem("token") || null);

    const login = async (username, password) => {
    try {
        const response = await axios.post("http://localhost:8080/auth/login", {
            username,
            senha: password
        });

        const token = response.data.token;
        const usernameReturned = response.data.username;
        const role = response.data.role;

        localStorage.setItem("token", token);
        localStorage.setItem("username", usernameReturned);
        localStorage.setItem("role", role);

        setToken(token);
        setUser(usernameReturned);

        return true;

    } catch (err) {
        return false;
    }
};

const isAdmin = () => {
    return localStorage.getItem("role") === "ADMIN";
};


    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

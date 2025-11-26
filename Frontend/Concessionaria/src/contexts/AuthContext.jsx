import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        if (username === "admin" && password === "admin") {
            setUser({ role: "admin", username });
            return true;
        }
        if (username === "cliente" && password === "cliente") {
            setUser({ role: "cliente", username });
            return true;
        }
        return false;
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}

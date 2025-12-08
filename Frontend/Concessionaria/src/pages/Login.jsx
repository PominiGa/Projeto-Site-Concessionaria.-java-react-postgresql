import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";

export default function Login() {
    const { login } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        const ok = await login(username, password);

        if (ok) navigate("/");
        else setError("Login inválido!");
    };

    return (
        <div className="login-container">
            <form onSubmit={handleLogin} className="login-box">
                <h2>Login</h2>

                <input placeholder="Usuário" value={username}
                    onChange={e => setUsername(e.target.value)} />

                <input placeholder="Senha" type="password" value={password}
                    onChange={e => setPassword(e.target.value)} />

                <button type="submit">Entrar</button>

                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
}

import { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    const ok = await register(username, email, password);
    if (ok) navigate("/login");
    else setError("Erro ao registrar!");
  };

  return (
    <div className="login-container">
      <form onSubmit={handleRegister} className="login-box">
        <h2>Registrar</h2>
        <input placeholder="Usuário" value={username} onChange={e => setUsername(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <input placeholder="Senha" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Registrar</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

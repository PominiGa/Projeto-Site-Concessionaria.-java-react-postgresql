import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/navbar.css";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="navbar">
            <h2 className="logo">Concessionária Premium</h2>

            <div className="links">
                <Link to="/">Home</Link>

                {user?.role === "admin" && <Link to="/admin">Admin</Link>}

                {!user && <Link to="/login">Login</Link>}
                {user && <button onClick={logout}>Sair</button>}
            </div>
        </nav>
    );
}

import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/navbar.css";

export default function Navbar() {
    const { user, logout } = useAuth();
    const role = localStorage.getItem("role");

    return (
        <nav className="navbar">
            <h2 className="logo">Concessionária Pomini</h2>

            <div className="links">
                <Link to="/">Home</Link>

                {role === "ADMIN" && <Link to="/admin">Admin</Link>}

                {!user && <Link to="/login">Login</Link>}

                {user && (
                    <button className="logout-btn" onClick={logout}>
                        Sair
                    </button>
                )}
            </div>
        </nav>
    );
}

import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import "../styles/navbar.css";

export default function Navbar() {
    const { user, logout } = useAuth();

    console.debug("Navbar user:", user);

    return (
        <nav className="navbar">
            <h2 className="logo">Concessionária Premium</h2>

            <div className="links">
                <Link to="/">Home</Link>

                {user?.role === "admin" && <Link to="/admin">Admin</Link>}

                {!user && <Link to="/login">Login</Link>}

                {user && (
                    <button
                        type="button"
                        className="logout-btn"
                        onClick={() => {
                            if (typeof logout === "function") logout();
                            else console.warn("logout não é uma função:", logout);
                        }}
                    >
                        Sair
                    </button>
                )}
            </div>
        </nav>
    );
}

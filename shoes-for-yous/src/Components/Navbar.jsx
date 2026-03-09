import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "20px", padding: "10px" }}>
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/admin">Admin Portal</Link>
        </nav>
    )
}

export default Navbar;
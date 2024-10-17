import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>The Code blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#357af1",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

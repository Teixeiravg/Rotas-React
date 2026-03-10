import { Link } from "react-router-dom";
import '../styles/style.css'

function Menu() {
  return (
    <nav
      style={{
        background: "#333",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <h1 style={{ color: "white", margin: 0 }}>SolutionsTech</h1>

      <div>
        <Link style={{ color: "white", marginRight: "20px" }} to={"/"}>
          Home
        </Link>
        <Link style={{ color: "white", marginRight: "20px" }} to={"/produto"}>
          Produto
        </Link>
        <Link style={{ color: "white", marginRight: "20px" }} to={"/sobre"}>
          Empresa
        </Link>
        <Link style={{ color: "white" }} to={"/contato"}>
          Contato
        </Link>
      </div>
    </nav>
  );
}

export default Menu;
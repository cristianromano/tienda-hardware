import { Button } from "@mui/material";
import styles from "./Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import { product } from "../../productMock";

const Navbar = ({ children }) => {
  const productList = product.filter;

  return (
    <div className={styles.containerNavbar}>
      <Link to={"/"}>
        <img
          style={{ maxWidth: "100px", height: "100px" }}
          src="https://res.cloudinary.com/dokpjxgbb/image/upload/v1677365821/4430008_xesrdp.png"
          alt="logo"
          srcset=""
        />
      </Link>

      <ul className={styles.containerList}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="outlined">Hardware</Button>
        </Link>
        <Link to="/category/rtx" style={{ textDecoration: "none" }}>
          <Button variant="outlined">RTX</Button>
        </Link>
        <Link to="/category/radeon" style={{ textDecoration: "none" }}>
          <Button variant="outlined">RADEON</Button>
        </Link>
      </ul>

      <CartWidget />
    </div>
  );
};

export default Navbar;

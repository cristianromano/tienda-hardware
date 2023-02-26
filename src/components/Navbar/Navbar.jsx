import { Button } from "@mui/material";
import styles from "./Navbar.module.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img
        style={{ maxWidth: "100px", height: "100px" }}
        src="https://res.cloudinary.com/dokpjxgbb/image/upload/v1677365821/4430008_xesrdp.png"
        alt="logo"
        srcset=""
      />
      <ul className={styles.containerList}>
        <li>
          <Button variant="outlined">Hardware</Button>
        </li>
        <li>
          <Button variant="outlined">Nosotros</Button>
        </li>
        <li>
          <Button variant="outlined">Ayuda</Button>
        </li>
      </ul>
      <ShoppingCartIcon fontSize="large" className={styles.carrito} />
    </div>
  );
};

export default Navbar;

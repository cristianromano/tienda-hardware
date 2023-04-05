import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { cart, getTotalCantidad } = useContext(CartContext);

  const totalCarrito = getTotalCantidad();
  return (
    <Link to="/cart">
      <div>
        <ShoppingCartIcon fontSize="large" className={styles.carrito} />
        <div className="bubble-counter">
          <span
            style={{ display: "block", color: "white", padding: "1px 20px" }}
          >
            {totalCarrito}
          </span>
        </div>
      </div>
    </Link>
  );
};

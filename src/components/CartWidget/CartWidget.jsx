import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styles from "./CartWidget.module.css";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";

export const CartWidget = () => {
  return (
    <Link to="/cart">
      <div>
        <ShoppingCartIcon fontSize="large" className={styles.carrito} />
      </div>
    </Link>
  );
};

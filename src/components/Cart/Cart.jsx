import React, { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Table from "@mui/joy/Table";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import FormCheckout from "../FormCheckout/FormCheckout";
import { Link } from "react-router-dom";

export const Cart = () => {
  const { cart, clearCart, getPrecioTotal, EliminarDeCarrito } =
    useContext(CartContext);

  const [mostrarCheckOut, setMostarCheckout] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const clear = () => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Este cambio no se puede revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar!",
    }).then((result) => {
      if (result.isConfirmed) {
        clearCart();
        Swal.fire("Borrado!", "La lista fue eliminada", "success");
      }
    });
  };

  if (orderId) {
    return (
      <div>
        <h2>Gracias por su compra!</h2>
        <h4>Su orden de seguimiento es:{orderId}</h4>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" style={{ textDecoration: "none" }}>
            SEGUIR COMPRANDO
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div>
      {!mostrarCheckOut ? (
        <div>
          <Table
            aria-label="basic table"
            style={{ width: "60%", height: "50%" }}
          >
            <thead style={{ width: "10%", height: "10%" }}>
              <tr>
                <th>Producto</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th></th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: "#A7C7E7" }}>
              {cart &&
                Array.isArray(cart) &&
                cart.map((e) => {
                  return (
                    <tr key={e.id}>
                      <td>
                        <img
                          style={{ height: "50px", width: "50px" }}
                          src={e.img}
                        ></img>
                      </td>
                      <td style={{ color: "white" }}>{e.title}</td>
                      <td style={{ color: "white" }}>{e.description}</td>
                      <td style={{ color: "white" }}>{e.price}</td>
                      <td style={{ color: "white" }}>{e.cantidad}</td>
                      <td style={{ color: "white" }}>
                        <Button
                          variant="contained"
                          onClick={() => EliminarDeCarrito(e.id)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
          {cart.length > 0 && (
            <div>
              <h1>Total:${getPrecioTotal()}</h1>
              <Button
                variant="contained"
                style={{ margin: "5px" }}
                onClick={() => setMostarCheckout(true)}
              >
                COMPRAR
              </Button>
              <Button variant="contained" onClick={clear}>
                LIMPIAR CARRITO
              </Button>
            </div>
          )}
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getPrecioTotal={getPrecioTotal}
          setOrderId={setOrderId}
          clearCart={clearCart}
        ></FormCheckout>
      )}
    </div>
  );
};

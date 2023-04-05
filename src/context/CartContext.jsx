import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const AgregarAlCarrito = (producto) => {
    let existe = isInCart(producto.id);

    if (existe) {
      let newCart = cart.map((e) => {
        if (e.id === producto.id) {
          return {
            ...e,
            cantidad: producto.cantidad,
          };
        } else {
          return e;
        }
      });

      setCart(newCart);
    } else {
      setCart([...cart, producto]);
    }
  };

  const EliminarDeCarrito = (id) => {
    const newCart = cart.filter((e) => {
      return e.id !== id;
    });
    setCart(newCart);
  };

  const getCantidadById = (id) => {
    const total = cart.find((e) => {
      return e.id === id;
    });

    return total?.cantidad;
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotalCantidad = () => {
    const total = cart.reduce((acc, e) => {
      return acc + e.cantidad;
    }, 0);

    return total;
  };

  const getPrecioTotal = () => {
    const total = cart.reduce((acc, e) => {
      let suma = e.cantidad * e.price;
      return acc + suma;
    }, 0);

    return total;
  };

  const isInCart = (id) => {
    const existe = cart.some((e) => e.id === id);
    return existe;
  };

  const data = {
    cart: cart,
    setCart,
    AgregarAlCarrito: AgregarAlCarrito,
    clearCart,
    getTotalCantidad,
    EliminarDeCarrito,
    getPrecioTotal,
    getCantidadById,
  };
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

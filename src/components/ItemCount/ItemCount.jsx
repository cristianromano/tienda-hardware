import { Button } from "@mui/joy";
import { useState } from "react";
import { CartContext } from "../../context/CartContext";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <div sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
      <h2>{contador}</h2>

      <Button onClick={sumar} variant="outlined" style={{ margin: "10px" }}>
        +
      </Button>

      <Button onClick={() => onAdd(contador)}>Agregar al carrito</Button>

      <Button onClick={restar} variant="outlined" style={{ margin: "10px" }}>
        -
      </Button>
    </div>
  );
};

export default ItemCount;

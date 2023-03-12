import React from "react";
import { useParams } from "react-router-dom";
import { product } from "../../productMock";
import { Item } from "../Item/Item";
import { CardContent } from "@mui/material";
import { height, width } from "@mui/system";
import ItemCount from "../ItemCount/ItemCount";

export const ItemDetailContainer = () => {
  const { id } = useParams();

  const producto = product.find((e) => {
    return e.id === Number(id);
  });

  const onAdd = (cantidad) => {
    console.log(`se agrego al carrito ${cantidad} productos`);
  };

  return (
    <div>
      <h1>{producto.title}</h1>
      <img
        style={{ height: 200, width: "200" }}
        src={producto.img}
        alt={producto.title}
        srcset=""
      />
      <ItemCount stock={producto.stock} onAdd={onAdd}></ItemCount>
    </div>
  );
};

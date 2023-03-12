import React from "react";
import styled from "./ItemListContainer.module.css";
import { useEffect, useState } from "react";
import { product } from "../../productMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { marca } = useParams();
  const [item, setitem] = useState([]);

  const productosFiltrados = product.filter((e) => e.marca === marca);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(marca ? productosFiltrados : product);
    });

    productList
      .then((res) => {
        setitem(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [marca]);

  return (
    <div className={styled.containerList}>
      <ItemList items={item}></ItemList>
    </div>
  );
};

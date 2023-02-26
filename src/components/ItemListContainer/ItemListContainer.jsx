import React from "react";
import styled from "./ItemListContainer.module.css";

export const ItemListContainer = ({ nombre }) => {
  return <div className={styled.containerList}>Bienvenido {nombre}</div>;
};

import React from "react";
import { Item } from "../Item/Item";
import styles from "./ItemList.module.css";

export const ItemList = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((e) => {
        return <Item key={e.id} items={e}></Item>;
      })}
    </div>
  );
};

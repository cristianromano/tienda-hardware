import React from "react";
import styled from "./ItemListContainer.module.css";
import { useEffect, useState } from "react";
import { product } from "../../productMock";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { db } from "../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "white",
};

export const ItemListContainer = () => {
  const { marca } = useParams();
  const [item, setItem] = useState([]);

  //  const productosFiltrados = product.filter((e) => e.marca === marca);

  // useEffect(() => {
  //   const productList = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(marca ? productosFiltrados : product);
  //     }, 2000);
  //   });

  //   productList
  //     .then((res) => {
  //       setitem(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [marca]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    if (marca) {
      const consulta = query(itemsCollection, where("marca", "==", marca));
      getDocs(consulta).then((res) => {
        let productosFilter = res.docs.map((e) => {
          return {
            ...e.data(),
            id: e.id,
          };
        });
        setItem(productosFilter);
      });
    } else {
      const itemsCollection = collection(db, "products");
      getDocs(itemsCollection).then((res) => {
        let products = res.docs.map((e) => {
          return {
            ...e.data(),
            id: e.id,
          };
        });
        setItem(products);
      });
    }
  }, [marca]);

  return (
    <div className={styled.containerList}>
      {item.length > 0 ? (
        <ItemList items={item}></ItemList>
      ) : (
        <ClipLoader color="white" size={100} cssOverride={override} />
      )}
    </div>
  );
};

import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { product } from "../../productMock";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productoSeleccionado, setProductoSeleccionado] = useState({});
  const { AgregarAlCarrito, getCantidadById } = useContext(CartContext);

  let cantidadStockInicial = getCantidadById(Number(id));

  // const productoSeleccionado = product.find((e) => {
  //   return e.id === Number(id);
  // });

  useEffect(() => {
    const itemsCollection = collection(db, "products");
    const ref = doc(itemsCollection, id);
    getDoc(ref).then((res) => {
      setProductoSeleccionado({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  const onAdd = (contador) => {
    let product = {
      ...productoSeleccionado,
      cantidad: contador,
    };
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Se ha agregado al carrito",
      showConfirmButton: false,
      timer: 900,
    });
    AgregarAlCarrito(product);
  };

  return (
    <div>
      <h1>{productoSeleccionado.title}</h1>
      <img
        style={{ height: 200, width: "200" }}
        src={productoSeleccionado.img}
        alt={productoSeleccionado.title}
        srcset=""
      />
      <h1>{productoSeleccionado.price}</h1>
      <ItemCount
        stock={productoSeleccionado.stock}
        initial={cantidadStockInicial}
        onAdd={onAdd}
      ></ItemCount>
    </div>
  );
};

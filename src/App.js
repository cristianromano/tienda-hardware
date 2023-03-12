import "./App.css";
import Footer from "./components/Footer/Footer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Cart } from "./components/Cart/Cart";
import { Login } from "./components/Login/Login";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { Item } from "./components/Item/Item";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/category/:marca" element={<ItemListContainer />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/ItemDetail/:id" element={<ItemDetailContainer />}></Route>
        <Route
          path="*"
          element={<h1>No se encuentra la ruta especificada</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

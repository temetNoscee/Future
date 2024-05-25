import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import AdminNav from "../admin/adminNav";
import AddProduct from "../admin/addProdut";
import Quantity from "../admin/quantity";
import Questions from "../admin/replyMessage";
import Login from "../pages/Login";
const Routers: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={"home"} />}></Route>
      <Route path="home" element={<Home />}></Route>
      <Route path="shop" element={<Shop />}></Route>
      <Route path="cart" element={<Cart />}></Route>
      <Route path="shop/:id" element={<ProductDetails />}></Route>
      <Route path="dashboard" element={<AdminNav />}></Route>
      <Route path="dashboard/add-product" element={<AddProduct />}></Route>
      <Route path="dashboard/answer" element={<Questions />}></Route>
      <Route path="dashboard/quantity" element={<Quantity />}></Route>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
};

export default Routers;

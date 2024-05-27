import { createBrowserRouter } from "react-router-dom";

import AddProduct from "../admin/addProdut";
import AdminNav from "../admin/adminNav";
import Quantity from "../admin/quantity";
import Questions from "../admin/replyMessage";
import Layouts from "../components/Layouts/Layouts";
import Cart from "../pages/Cart";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProductDetails from "../pages/ProductDetails";
import Shop from "../pages/Shop";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      { path: "/", element: <Home />, index: true },
      { path: "shop", element: <Shop /> },
      { path: "cart", element: <Cart /> },
      { path: "shop/:id", element: <ProductDetails /> },
      { path: "dashboard", element: <AdminNav /> },
      { path: "dashboard/add-product", element: <AddProduct /> },
      { path: "dashboard/answer", element: <Questions /> },
      { path: "dashboard/quantity", element: <Quantity /> },
      { path: "login", element: <Login /> },
    ],
  },
]);

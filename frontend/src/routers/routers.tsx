import {
  ActionFunctionArgs,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

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
import { api } from "../api";
import axios from "axios";

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
      {
        path: "login",
        element: <Login />,
        action: async ({ request }: ActionFunctionArgs) => {
          const form = await request.formData();
          const _action = form.get("_action") as "login" | "signup";
          if (_action === "login") {
            const email = form.get("email") as string;
            const password = form.get("password") as string;
            const { data: token } = await axios.post(
              "http://localhost:8080/api/v1/user/login",
              null,
              {
                params: {
                  email,
                  password,
                },
              }
            );
            localStorage.setItem("token", token);
            return redirect("/");
          } else {
            const email = form.get("email") as string;
            const password = form.get("password") as string;
            const username = form.get("username") as string;
            const { data: token } = await axios.post(
              "http://localhost:8080/api/v1/user/signup",
              null,
              {
                params: {
                  email,
                  password,
                  username,
                },
              }
            );
            localStorage.setItem("token", token);
            return redirect("/");
          }
        },
      },
    ],
  },
]);

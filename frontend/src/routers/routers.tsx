import {
  ActionFunctionArgs,
  createBrowserRouter,
  LoaderFunctionArgs,
  redirect,
} from "react-router-dom";

import axios from "axios";
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
import invariant from "tiny-invariant";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        path: "/",
        element: <Home />,
        index: true,
        loader: async () => {
          const { data: products } = await api().get("/furniture/editors-pick");
          return { products };
        },
      },
      {
        path: "shop",
        element: <Shop />,
        loader: async () => {
          const { data: categories } = await api().get("/furniture/categories");
          return { categories };
        },
      },
      { path: "cart", element: <Cart /> },
      {
        path: "shop/:id",
        element: <ProductDetails />,
        loader: async ({ params }: LoaderFunctionArgs) => {
          const id = params.id;
          invariant(id, "id is required");
          const { data: product } = await api().get(`/furniture/${id}`);
          const { data: comments } = await api().get("/comment", {
            params: {
              furnitureId: id,
            },
          });
          const response = await api().get("/question/my-question", {
            params: {
              furnitureId: id,
            },
            validateStatus(status) {
              return status === 200 || status === 404;
            },
          });
          const question = response.status === 200 ? response.data : null;
          return { product, comments, question };
        },
        action: async ({ request, params }: ActionFunctionArgs) => {
          const form = await request.formData();
          const _action = form.get("_action") as "comment" | "ask";
          const id = params.id;
          invariant(id, "id is required");
          if (_action === "ask") {
            const content = form.get("content") as string;
            await api().post("/question", null, {
              params: {
                furnitureId: id,
                content,
              },
            });
            return null;
          }
          if (_action === "comment") {
            const content = form.get("content") as string;
            const stars = form.get("stars") as string;
            await api().post("/comment", null, {
              params: {
                furnitureId: id,
                content,
                stars,
              },
            });
            return null;
          }
          return null;
        },
      },
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
              "http://localhost:8080/api/user/login",
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
              "http://localhost:8080/api/user/signup",
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
  { path: "dashboard", element: <AdminNav /> },
  { path: "dashboard/add-product", element: <AddProduct /> },
  {
    path: "dashboard/answer",
    element: <Questions />,
    action: async ({ request }: ActionFunctionArgs) => {
      const form = await request.formData();
      const questionId = form.get("question-id") as string;
      const response = form.get("response") as string;
      await api().post(`/question/${questionId}/answer`, null, {
        params: {
          response,
        },
      });
      return null;
    },
    loader: async () => {
      const { data: questions } = await api().get("/question");
      return { questions };
    },
  },
  {
    path: "dashboard/quantity",
    element: <Quantity />,
    loader: async () => {
      const { data: furnitures } = await api().get("/furniture/all");
      return { furnitures };
    },
    action: async ({ request }: ActionFunctionArgs) => {
      const form = await request.formData();
      const stock = form.get("stock") as string;
      const furnitureId = form.get("furniture-id") as string;
      await api().post(`/furniture/${furnitureId}/change-stock`, null, {
        params: {
          stock,
        },
      });
      return null;
    },
  },
]);

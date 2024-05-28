import { redirect } from "react-router-dom";
import { api } from "../api";

export async function requiresAdmin() {
  const { data: profile } = await api().get("/user/profile");
  if (!profile.isAdmin) {
    throw redirect("/login");
  }
  console.log("Admin detected");
}

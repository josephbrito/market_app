import axios from "axios";

export async function callData() {
  const api = axios.create({
    baseURL: "https://fakestoreapi.com/",
  });

  const req = await api.get("products");
  const data = await req.data;

  return data;
}

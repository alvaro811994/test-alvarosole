import axios from "axios";
import { endpoint } from "../helpers";

async function getProducts(api: any) {
  const res = await axios.get(api);
  console.log(res.status);
}

getProducts(endpoint);

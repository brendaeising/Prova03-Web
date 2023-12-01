import axios from "axios";

export const api = axios.create({
  baseURL: "https://bu.furb.br/mcardoso/progWeb/apiRestAval.php",
});

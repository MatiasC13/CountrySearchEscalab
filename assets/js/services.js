import { urlApi } from "./utils.js";
const container = document.querySelector("#container");

export async function fetchData(param) {
  container.innerHTML = "";
  const response = await fetch(urlApi + param, {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}

import { routes } from "./utils.js";
import { fetchData } from "./services.js";
import { printCard, printDetail } from "./print.js";
import { preventNotFoundImage } from "./helper.js";

async function switchRoutes(location) {
//del parámetro location mediante desestructuración se obtinen los parámetros para el hash y el filtro de la api
  const [hash, param] = location.split("_");

  try {
    // dos modos de pantalla 
    switch (hash) {
      case routes.home:
        const homeData = await fetchData(param);

        if (homeData.length > 0) {
          const cardList = homeData.map((d) => printCard(d)).join("");
          container.innerHTML = `<article class="card">${cardList}</article>`;
        // en caso de que las imágenes fallen se le asigna una imágen por defecto
          preventNotFoundImage();
        } else {
          throw new Error("No se obtuvieron resultados");
        }
        break;

      case routes.detail:
        const detailData = await fetchData(param);
        const detail = printDetail(detailData);
        container.innerHTML = `${detail}`;
        preventNotFoundImage();
        break;

      default:
        // en caso de que el hash no sea válido(p ej. ingresos desde la url)
        throw new Error("Página no encontrada");
    }
  } catch (error) {
    container.innerHTML = `<article class="card">${error}</article>`;
  }
}

export default switchRoutes;

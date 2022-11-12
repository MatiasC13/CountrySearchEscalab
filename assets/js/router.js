import { routes } from "./utils.js";
import { fetchData } from "./services.js";
import { printCard, printDetail } from "./print.js";
import { preventNotFoundImage } from "./helper.js";

async function switchRoutes(route) {
  const [hash, param] = route.split("_");

  try {
    switch (hash) {
      case routes.home:
        const homeData = await fetchData(param);

        if (homeData.length > 0) {
          const cardList = homeData.map((d) => printCard(d)).join("");
          container.innerHTML = `<article class="card">${cardList}</article>`;
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
        throw new Error("hash no valido");
        break;
    }
  } catch (error) {
    container.innerHTML = `<article class="card">${error}</article>`;
  }
}

export default switchRoutes;

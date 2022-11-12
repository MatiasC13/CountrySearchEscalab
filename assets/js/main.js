import switchRoutes from "./router.js";
import { routes } from "./utils.js";

// asociando función de cambio de hash al escuchador del evento "hashchange" al objeto window
window.addEventListener("hashchange", () => switchRoutes(location.hash));

// al iniciar la aplicación se muestra la pantalla home y se pide la data de todos los países
window.addEventListener("load", () => {
  location.hash = routes.home + "_all";
  switchRoutes(location.hash);
});

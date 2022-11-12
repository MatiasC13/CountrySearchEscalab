
import switchRoutes from "./router.js";
import { routes } from "./utils.js";

window.addEventListener("hashchange", () => switchRoutes(location.hash));

window.addEventListener("load", () => {
  location.hash = routes.home + "_all";
  switchRoutes(location.hash);

});

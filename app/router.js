import { AboutController } from "./controllers/AboutController.js";
import { HomeController } from "./controllers/HomeController.js";
import { PokemonsController } from "./controllers/PokemonsController.js";
import { ValuesController } from "./controllers/ValuesController.js";
import { AboutView } from "./views/AboutView.js";

/**
 * Register your routes for the application here
 * @type {Route[]}
 */
export const router = [
  {
    path: '',
    controller: PokemonsController,
    view: /*html*/`
 <section class="container-fluid">
        <div class="row">
          <div class="col-3 text-center mt-3">
            <div id="pokeList" class="bg-dark pt-3 pb-2"></div>
          </div>
          <div class="col-6" id="activePoke"></div>
        </div>
      </section>
    `
  },
  {
    path: '#/about',
    controller: [AboutController, ValuesController],
    view: AboutView
  }
]






/**
 * Supporting types for the router
 * NOTE Controllers must be non instantiated 
 * @typedef {{[x:string]:any}} controller
 * @typedef {{path: string, controller?:controller |controller[], view?: string, target?: string}} Route
 */
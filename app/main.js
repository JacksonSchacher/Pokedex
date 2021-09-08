import { PokeCardController } from "./Controllers/PokeCardController.js";
import { PokeLibraryController } from "./Controllers/PokeLibraryController.js";

class App {
    pokeLibraryController = new PokeLibraryController();
    pokeCardController = new PokeCardController();
}

window["app"] = new App();
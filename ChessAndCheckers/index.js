// Errors
import err_NoContainer from "./js/errs/noContainer.js"
// Classes
import GameController from "./js/classes/GameController.js"

err_NoContainer()
  
const game = new GameController(document.getElementById("ChessAndCheckers_container"));

game.displayGameChoose()


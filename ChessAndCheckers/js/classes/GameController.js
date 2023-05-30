import err_wrongStep from "../errs/wrongStep.js";
import checkersForm from "../htmlGenerators/checkersForm.js";
import gameChoose from "../htmlGenerators/gameChoose.js";

export default class GameController {
  constructor(container) {
    this.container = container;
    this.checkers = null;
  }

  // Logic //


  // Front End //

  emptyContainer(){
    this.container.innerHTML = "";
  }
  displayGameChoose(){
    this.emptyContainer();
    let htmlCode = gameChoose(this);
    this.container.appendChild(htmlCode);
  }
  displayCheckersForm(){
    this.emptyContainer();
    let htmlCode = checkersForm(this);
    this.container.appendChild(htmlCode);
  }
}
export default function gameChoose(gameInstance){

  let ButtonStyle = (button, backgroundColor, textColor) => {
    button.style.backgroundColor = backgroundColor;
    button.style.color = textColor;
    button.style.width = "108px";
    button.style.height = "52px";
    button.style.boxShadow = "0px 0px 6px " + backgroundColor
    button.style.border = "2px solid "+ backgroundColor
  }

  const container = document.createElement("div");
  container.classList.add("gameChoose");
  container.style.width = "250px";
  container.style.display = "flex";
  container.style.flexDirection = "row";
  container.style.justifyContent = "space-between"

  
  const Btn_chess = document.createElement("button");
  Btn_chess.classList.add("BTN_chess");
  Btn_chess.innerText = "Chess"
  ButtonStyle(Btn_chess,"blue", "white")


  const Btn_checkers = document.createElement("button");
  Btn_checkers.classList.add("BTN_checkers");
  Btn_checkers.innerText = "Checkers"
  Btn_checkers.addEventListener("click",(e) => {
    gameInstance.front_step = "Checkers";
    gameInstance.displayCheckersForm()
  })
  ButtonStyle(Btn_checkers,"red", "white")

  container.appendChild(Btn_chess)
  container.appendChild(Btn_checkers)
  
  return container;
}
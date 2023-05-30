export default function checkersForm(gameInstance){
  function styleContainer(container){
    container.classList.add("checkersForm");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.border = "2px solid black";
    container.style.borderRadius = "4px";
    container.style.padding = "10px";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.gap = "20px"
  }
  function createForm(labelText,id){
    const label = document.createElement("label");
    label.innerText = labelText;
    label.setAttribute("for", id);

    const input = document.createElement("input");
    input.id = id;
    input.required = "true";
    input.setAttribute("type", "text");
    input.setAttribute("name", id);

    return [label,input]
  }
  function createButton(input1,input2){
    const button = document.createElement("button");
    button.innerText = "Begin game"
    button.style.backgroundColor = "white";
    button.style.color = "black";
    button.style.width = "108px";
    button.style.height = "52px";
    button.style.boxShadow = "0px 0px 6px " + "#00000033"
    button.style.border = "2px solid black"

    button.addEventListener("click",(e) => {
      console.log(input1.value,input2.value);
    })

    return button
  }

  let container = document.createElement("div");
  styleContainer(container);
  let input1 = createForm("Player 1", "checkers_player1");
  let input2 = createForm("Player 2", "checkers_player2");
  let button = createButton(input1[1],input2[1])
  container.appendChild(input1[0]);
  container.appendChild(input1[1]);
  container.appendChild(input2[0]);
  container.appendChild(input2[1]);
  container.appendChild(button);
  return container;
}
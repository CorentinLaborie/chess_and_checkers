export default function err_NoContainer(){
  let container = document.getElementById("ChessAndCheckers_container");
  if (document.getElementById("ChessAndCheckers_container") === null) {
    let text = "Chess and Checkers : Container is not set";
    throw new Error(text);
  } else {
    return true;
  }
}
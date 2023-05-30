export default function err_wrongStep(str){
  if (typeof myVar === 'string' || myVar instanceof String){
    return true;
  }
  else {
    throw new Error("Game second argument is not a string")
  }
}
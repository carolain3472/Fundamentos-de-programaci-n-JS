
function contadorletra (cadena,contador){
  if (cadena== ""){
    return (contador);
  }else{
    return contadorletra (cadena.slice (1), contador+1)
  }
}

console.log (contadorletra ("papa",0))

 
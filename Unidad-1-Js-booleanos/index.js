 /*
 var recetavegetariana= ["Arroz con huevo", "Vegetales al horno","Fritata vegetariana","Sandwich vegetariano"]

 var recetanovegetariana= ["Carne a la brasa", "Pollo frito", "Pollo con champiñones", "Cordon blue"]

 var menuvegetariano= true

var x = "Menús"

 function menu (menuaescoger,receta1,receta2){
   if (menuaescoger){
     console.log(x)
     return receta1;
   }else{
     console.log(x)
     return receta2
   }
 }

console.log(menu(menuvegetariano,recetavegetariana,recetanovegetariana))

///////////////////////////////////////////////////////////
/*La palabra predeterminada como switch sirve para ahorrarnos el if else cuando se iguala a algo, solo especifica los casos a tratar, ejemplo:*/

/*
var color= "negro"

switch (color){
  case "rojo": 
    console.log("FFF00");
    break;
  case "verde": 
    console.log("F0FF0");
    break;
  case "negro": 
    console.log("FF0FF");
    break;
  default: 
    console.log("????");
    
}

///////////////////////////////////////////////////////////
function saludo(nombre, apellido, genero, evento, minutosQueFaltan){
  var saludo = "";
  var dia = "";


  if (genero == "FEMENINO"){
      saludo = "Bienvenida";
  }
  else{
      saludo = "Bienvenido";
  }

  if (minutosQueFaltan < 60*24){
      dia = "hoy";
  }
  else if (minutosQueFaltan < 60*24*2){
      dia = "maÃ±ana";
  }
  else{
      dia = "pronto";
  }

  return `${saludo} ${nombre.trim().toUpperCase()} ${apellido.trim().toUpperCase()}, recuerda ${dia} el evento (${evento})`;

}

console.log(saludo("    LUIS", "perez", "MASCULINO", "PelÃ­cula", 600));
console.log(saludo("ana ", "peRez", "FEMENINO", "Comidas del Mundo", 1500));
console.log(saludo("  PEDRO ", "Gil", "MASCULINO", "Juego de Baloncesto", 5000));
*/

///////////////////////////////////////////////////////////

var canciones= ["Shape of my heart", "Lolly", "Don´t cry", "Whising well", "Bloodstream"]

var i= 0
var titulo= "Mis canciones favoritas"

console.log(titulo)

function favsongs (arreglo){
  while ( i < arreglo.length){
    console.log(arreglo[i])
   i++

  }
}

console.log(favsongs(canciones))

var nombre= "carol"

console.log('Estimado '+ nombre +' hola')


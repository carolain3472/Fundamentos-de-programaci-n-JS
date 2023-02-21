//Par o impar 
function parimpar (x){
  if (x%2==0){
    return "Es un número par"
  }else{
    return "Es un número impar"
  }
}

console.log (parimpar (2))


//Multiplo del segundo 

function multiplo (x,y){
  if (x%y==0){
    return "El primer numero es multiplo del segundo"
  }else{
    return "El primer numero NO es multiplo del segundo"
  }
}

console.log (multiplo (20,2))


//Salario semanal  

function salario (x){
  if (x<40){
    return (16000*x)
  }else{
    return ((16000*40)+((x-40)*20000))
  }
}

console.log (salario (42))

//Sueldo

function sueldo (x){
  if (x<300000){
    return ((x*12/100)+x)
  }if (x<500000){
    return ((x*10/100)+x)
  } else{
    return ((x*5/100)+x)
  }
}

console.log (sueldo (200000))
console.log (sueldo (450000))
console.log (sueldo (700000))

//definitiva

function definitiva (x,y,z){
  return ((x*30/100)+(y*30/100)+(z*40/100))
}

function descuentomulta (x,y,z){
  if (definitiva(x,y,z)>=0.0 && definitiva (x,y,z)<=0.9){
  return ("multa: " + (definitiva(x,y,z)*40/100))

  } if (definitiva (x,y,z)>=1.0 && definitiva (x,y,z)<=1.9){
    return ("multa: " + (definitiva (x,y,z)*20/100))

  } if (definitiva (x,y,z)>=2.0 && definitiva (x,y,z)<=2.9){
    return ("multa: " + (definitiva (x,y,z)*10/100))

  }if (definitiva (x,y,z)>=3.0 && definitiva (x,y,z)<=3.9){
     return ("descuento: " + (definitiva (x,y,z)*20/100))

  } if (definitiva (x,y,z)>=4.0 && definitiva (x,y,z)<=4.4){
    return ("descuento: " + (definitiva (x,y,z)*30/100))
    
} if (definitiva (x,y,z)>=4.5 && definitiva (x,y,z)<=5.0){
  return ("descuento: " + (definitiva (x,y,z)*40/100))
}
}



console.log ( descuentomulta(0.4,0.4,0.4))
console.log ( descuentomulta(1.5,1.5,1.5))
console.log ( descuentomulta(2.6,2.6,2.6))
console.log ( descuentomulta(3.2,3.2,3.2))
console.log ( descuentomulta(4.2,4.2,4.2))
console.log ( descuentomulta(4.5,4.5,4.5))

//imprimir un mensaje

function mensaje (x){
  if (x=="a" || x=="A"){
    return "Android"
  }if (x=="i" || x=="I"){
    return "iOS"
  }else{
    return "Opción invalida"
  }
}

console.log (mensaje ("a"))
console.log (mensaje ("A"))
console.log (mensaje ("I"))
console.log (mensaje ("i"))
console.log (mensaje ("f"))

//Sueldo y categoria

function sueldocategoria (sueldo,categoria){
  if (categoria==1){
    return ((sueldo*12/100)+sueldo)
  }if (categoria==2){
    return ((sueldo*10/100)+sueldo)
  }if (categoria==3){
    return ((sueldo*8/100)+sueldo)
  }if (categoria==4){
    return ((sueldo*5/100)+sueldo)
  }
}

console.log (sueldocategoria (200000,1))
console.log (sueldocategoria (200000,2))
console.log (sueldocategoria (200000,3))
console.log (sueldocategoria (200000,4))


//

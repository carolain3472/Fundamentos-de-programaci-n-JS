// Taller de operaciones aritmeticas
//Nombre: Carolain Jimenez Bedoya 
//fecha de creación: 04-03-2020
//próposito: Ejecutar operaciones aritmeticas en Javascript

console.log (1+1);
console.log (2+8);
console.log (2*5);
console.log (2-6);
console.log (21+4);
console.log (Math.pow (9,3));
console.log (Math.sqrt (16));
console.log (Math.sin(0));
console.log (Math.cos(0));
console.log (Math.sqrt (-1));
console.log (Math.tan (30).toFixed(4));
console.log ((2/3 + 2/3).toFixed(4));
console.log ((3/8 +5).toFixed(4));

//.toFixed-> para colocar los  decimales que se deseen


//Taller expresiones lógicas

console.log (true && true);
console.log (false || false);
console. log (!false);
console.log (7==10);
console.log (5<10);
console.log (!7<3 && 6>5);
console.log (7<3 || 6>5);
console.log ((5<6<7) && (2<3<4));


//contrato: 

console.log (10*170*60*24)



// contrato: temṕeratura(número->número)
//próposito: Pasar una determinada temperatura que está en grados celsius a grado Farenheit.

function temperatura (t){
  return ((t*9/5)+32);
}

console.log (temperatura (3))


//contrato: dolar (Número-> número)
//próposito:Pasar una eterminada cantidad de dinero en pesos colombianos a su equivalente en dólares 

function dolar (x){
  return (x/3341);
}
console.log (dolar (35000).toFixed(4))

//contrato: areatriangulo: (número, número)-> número
//próposito: Determinar el area de un triagulo teniendo en cuenta las dimensiones de su base y su altura

function areatriangulo (b,h){
  return (b*h/2);
}

console.log (areatriangulo(11,7))

//contrato: digitos (número, número, número)-> número
//próposito: recibir 3 dígitos, empezando con el dígito menos significativo, seguido de los más significativos en ese orden. El programa debe producir el número correspondiente. 
function digitos (m,n,o){
  return (o*100 + n*10 +m*1);
}

console.log(digitos (5,9,14))



console.log((4.33/Math.sin (60)).toFixed(4))
  
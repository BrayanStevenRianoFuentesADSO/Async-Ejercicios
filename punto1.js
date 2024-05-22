/**
 
1. Escriba una función imprimirNumeros(desde, hasta) que genere un número cada segundo,
comenzando desde desde y terminando con hasta.
Haz dos variantes de la solución describiendo el paso a paso de cada una de ellas:
• Usando setInterval.
• Usando setTimeout anidado. 

*/



let desde = parseInt(prompt("numero DESDE el que se quiere contar"));
let hasta = parseInt(prompt("numero HASTA el que se quiere contar"));

/**VARIANTE NUMERO 1 (setInterval) */

/**let imprimir_numeros = setInterval(function () {
  console.log(desde)
  desde++

  if (desde > hasta) {
   clearInterval(imprimir_numeros)
  }
}, 1000) */



/**VARIANTE NUMERO 2 (setTimeout anidado) */

setTimeout(function imprimir_numeros() {
  console.log(desde)
  desde++

  if (desde <= hasta) {
    setTimeout(imprimir_numeros, 1000);
  }
}, 2000) 
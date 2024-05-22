/**10. Crear una función takeWhile que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva un array con los elementos hasta el primer callback que devolvió false
• (Inverso del dropWhile) */

const lodash = require("lodash");

const numeros = [2, 4, 6, 8, 10, 11, 12, 14, 16, 18, 20]

let num_impar = lodash.takeWhile(numeros, num => {
  return num % 2 === 0
})

console.log(num_impar)
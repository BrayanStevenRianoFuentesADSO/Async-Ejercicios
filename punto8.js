/**Crear una función findIndex que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el índice del elemento pasado como argumento del primer callback que
devuelva true
• sí ningún callback devuelve true, devuelva undefined
 */

const numeros = [1, 2, 3, 1, 6, 4]

const MayorA4 = num => num > 3

const resultado = numeros.findIndex(MayorA4)

console.log(resultado)
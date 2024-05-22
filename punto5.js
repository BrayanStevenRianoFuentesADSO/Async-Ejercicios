/**
 * 5. Crear una función every que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si todas las llamadas al callback devolvieron true
 */


const numeros = [3, 6, 9, 12, 15, 20]

const divisible_en_tres = nums => nums % 3 === 0

const resultado = numeros.every(divisible_en_tres)

console.log(resultado)


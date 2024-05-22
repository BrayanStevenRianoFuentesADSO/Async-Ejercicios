/**6. Crear una función some que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva true si al menos una de las llamadas al callback devolvió true */

const numeros = [1, 3, 5, 7, 28]

const num_par = num => num % 2 === 0

const resultado = numeros.some(num_par)

console.log(resultado)
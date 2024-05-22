
/**Crear una función find que acepte un array y un callback y que:
• por cada elemento del array ejecute el callback pasándole dicho elemento como
argumento
• devuelva el elemento pasado como argumento del primer callback que devuelva true
• sí ningún callback devuelve true, devuelva undefined */

const numeros = [1, 2, 3, 8, 5, 2.5]

const MayorQue5 = num => num > 5

const resultado = numeros.find(MayorQue5)

console.log(resultado)
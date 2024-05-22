/**16. Crea tres Promises consecutivas, donde cada una se resuelva después de 1 segundo y
devuelva un número diferente. Luego, encadena las tres Promises para sumar los resultados
y mostrar el resultado final. */

let promesa1 = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve(num1 = 1)
  }, 1000)

})

let promesa2 = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve(num2 = 2)
  }, 1000)

})

let promesa3 = new Promise((resolve, reject) => {

  setTimeout(() => {
    resolve(num3 = 3)
  }, 1000)

})

async function obtener_resultados() {

  let espera1 = await (promesa1, promesa2, promesa3)
  console.log(num1 + num2 + num3)

}

obtener_resultados()
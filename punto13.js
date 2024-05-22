/**13. Crea una Promise que se resuelva después de 3 segundos y luego imprima "Promise
resuelta" cuando se cumpla. */

let num1 = 5

let promesa1 = new Promise((resolve, reject) => {

  if (num1 == 5) {
    setTimeout(() => {
      resolve("promise resuelta")
    }, 3000)
  }

  else {
    setTimeout(() => {
      reject("promise rechazada")
    }, 3000);
  }
});



promesa1.then((resuelta) => {
  console.log(resuelta)
})

  .catch((rechazada) => {
    console.log(rechazada)
  })


/**15. Crea una Promise que se rechace después de 2 segundos y captura el error para imprimir
"Error: Promise rechazada". */

let num1 = 6

let promesa1 = new Promise((resolve, reject) => {

  if (num1 == 5) {
    setTimeout(() => {
      resolve("promise resuelta")
    }, 2000)
  }

  else {
    setTimeout(() => {
      reject("promise rechazada")
    }, 2000);
  }
});



promesa1.then((resuelta) => {
  console.log(resuelta)
})

  .catch((rechazada) => {
    console.log(rechazada)
  })
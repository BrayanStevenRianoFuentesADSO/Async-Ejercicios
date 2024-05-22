
/**14. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que
diga "Operación completada". Utiliza async/await. */

const mensaje = "Operacion completada"

function imprimir_mensaje() {

  return new Promise((resolve, reject) => {
    console.log("cargando")

    setTimeout(() => {
      resolve(mensaje)
    }, 1000)

  })
}

async function obtener_mensaje() {
  let espera = await imprimir_mensaje();
  console.log(espera)
}

obtener_mensaje();
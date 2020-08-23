// const edadDelUsuario = 7

// if (edadDelUsuario >= 18) {
//     alert("Felicitaciones, podes comprar alcohol (legalmente)")
// }
// else {
//     alert("Sos muy joven para comprar alcohol")
// }

// console.log(2 + 2)

// console.log(edadDelUsuario >= 18) // false
// console.log(edadDelUsuario == 7) // true

// console.log(Boolean(8))

// FALSY: 0, -0, undefined, "", NaN

// const nombreDelProducto = "Monitor Samsung 567"
// const precioDelProducto = 5000
// const cantidaddisponible = 0

// if(contenidoDisponible > 0) { // puedo achicar a poner sólo la variable, porque el cero es FALSY
//     alert("Esta disponible al producto Monitor Samsung")
// }
// else {
//     alert("No queda stock")
// }

/* ----------------------------------------------
        EJERCICIO POSITIVO O NEGATIVO
-------------------------------------------------*/

// esPositivoONegativo(numero)
// Crear una función esPositivoONegativo que acepte 
// como argumento un numero 
// y devuelva  
// el string positivo si el numero es positivo, 
// o el string negativo si el numero es negativo

// console.log(esPositivoONegativo(3))  // 'positivo'
// console.log(esPositivoONegativo(-5)) // 'negativo' 

// const esPositivoONegativo = (numero) => {
//     if (numero > 0) {
//         return 'positivo'
//     }

//     else if (numero = 0) {
//         return 'cero'
//     }

//     else if (numero < -1000) {
//         return 'tu número negativo es muyyy negativo'
//     }

//     else {
//         return 'negativo'
//     }
// }

// esPositivoONegativo(2)
// console.log(esPositivoONegativo(2))

// esPositivoONegativo(-4)
// console.log(esPositivoONegativo(-4))

/* ----------------------------------------------
            EJERCICIO SEMÁFORO
-------------------------------------------------*/

// avanzarSemaforo(colorActual)
// Crear una función avanzarSemaforo que acepte 
// como argumento un string colorActual 
// y devuelva un string con el siguiente color del semáforo, 
// siguiendo el orden: verde -> amarillo -> rojo -> verde

// console.log(avanzarSemaforo('verde'))     // 'amarillo'
// console.log(avanzarSemaforo('amarillo'))  // 'rojo'
// console.log(avanzarSemaforo('rojo'))      // 'verde'

// const avanzarSemaforo = (colorActual) => {
//     if (colorActual == "verde") {
//         return 'amarillo'
//     }
//     else if (colorActual == 'amarillo') {
//         return 'rojo'
//     }
//     else {
//         return 'verde'
//     }
// }

// avanzarSemaforo("verde")
// console.log(avanzarSemaforo("verde"))

// avanzarSemaforo('amarillo')
// console.log(avanzarSemaforo('amarillo'))

// avanzarSemaforo('rojo')
// console.log(avanzarSemaforo('rojo'))

/* ----------------------------------------------
            UNIR CONDICIONALES 
-------------------------------------------------*/
// const edadUsuario = 25
// const nombreUsuario = "Nik"

// if (edadUsuario >= 13 && edadUsuario <= 30 && nombreUsuario !== "Nik") {
//     alert("Tenes entre 13 y 30 años y no te llamás Nik")
// }

/* ----------------------------------------------
            OPERADOR LOGICO &&
-------------------------------------------------*/

// esVocal(letra)
// Crear una función esVocal que tome 
// como argumento un string letra 
// y devuelva 
// true si letra es una vocal o 
// false si no lo es.

// console.log(esVocal('a')) // true
// console.log(esVocal('n')) // false
// console.log(esVocal('e')) // true

// const esVocal = (letra) => {
//     if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') {
//         return true
//     }

//     else {
//         return false
//     }
// }

// esVocal('s')
// console.log(esVocal('s'))

// esVocal('o')
// console.log(esVocal('o'))

// esVocal('f')
// console.log(esVocal('f'))

// esVocal('i')
// console.log(esVocal('i'))

// esVocal('a')
// console.log(esVocal('a'))


// && AND --> une condiciones, ambas tienen que ser verdaderas
// || OR --> une condiciones, al menos una tiene que ser verdadera

/* ----------------------------------------------
            EJERCICIO PELÍCULAS
-------------------------------------------------*/

// const puedeVerPelicula = (edad, tieneAutorizacionDeSusPapitos) => {
//     if (edad >= 15 || tieneAutorizacionDeSusPapitos === true) {
//         return true
//     }

//     else {
//         return false
//     }

// }

// console.log(puedeVerPelicula(12, false))
// console.log(puedeVerPelicula(12, true))
// console.log(puedeVerPelicula(15, false))
// console.log(puedeVerPelicula(18, false))
// console.log(puedeVerPelicula(38, true))

/* ----------------------------------------------
            EJERCICIO CONSONANTES
-------------------------------------------------*/

// esConsonante(letra)
// Crear una función esConsonante que tome 
// como argumento un string letra 
// y devuelva 
// true si letra es una consonante o 
// false si no lo es

// console.log(esVocal('a')) // false
// console.log(esVocal('n')) // true
// console.log(esVocal('e')) // false

// const esConsonante = (letra) => {
//     if (letra !== 'a' && letra !== 'e' && letra !== 'i' && letra !== 'o' && letra !== 'u') {
//         return true
//     }

//     else {
//         return false
//     }
// }
    
// console.log(esConsonante('s'))

// console.log(esConsonante('o'))

// console.log(esConsonante('f'))

// console.log(esConsonante('i'))

// console.log(esConsonante('a'))
    

/* ----------------------------------------------
            EJERCICIO CONDUCIR
-------------------------------------------------*/

// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// Crear una función puedeRenovarCarnet que tome 
// como argumentos tres booleanos, 
// pasoTests, tieneMultasImpagas y pagoImpuestos, 

// y devuelva 
// true si una persona está habilitada para renovar su carnet de conducir o 
// false si no. 

// Una persona puede renovar su carnet si 
// pasó los tests, TRUE
// no tiene multas impagas y FALSE
// pagó todos los impuestos TRUE

// console.log(puedeRenovarCarnet(true, true, true))    // false
// console.log(puedeRenovarCarnet(true, true, false))   // false
// console.log(puedeRenovarCarnet(true, false, true))   // true
// console.log(puedeRenovarCarnet(true, false, false))  // false
// console.log(puedeRenovarCarnet(false, true, true))   // false
// console.log(puedeRenovarCarnet(false, true, false))  // false
// console.log(puedeRenovarCarnet(false, false, true))  // false
// console.log(puedeRenovarCarnet(false, false, false)) // false

// const puedeRenovarCarnet = (pasoTest, tieneMultasImpagas, pagoImpuestos) => {
//     if (pasoTest == true && tieneMultasImpagas == false && pagoImpuestos == true) {
//         return true
//     }
//     else {
//         return false
//     }
  
// }

// console.log(puedeRenovarCarnet(true, true, true))    // false
// console.log(puedeRenovarCarnet(true, true, false))   // false
// console.log(puedeRenovarCarnet(true, false, true))   // true
// console.log(puedeRenovarCarnet(true, false, false))  // false
// console.log(puedeRenovarCarnet(false, true, true))   // false
// console.log(puedeRenovarCarnet(false, true, false))  // false
// console.log(puedeRenovarCarnet(false, false, true))  // false
// console.log(puedeRenovarCarnet(false, false, false)) // false
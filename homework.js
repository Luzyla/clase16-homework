let nroEj = "Ejercicio 1"

// -----------------------------------------
// puedeVerPelicula(edad, tieneAutorizacion)
// -----------------------------------------

console.log("Ejercicio 1: puedeVerPelicula")

const puedeVerPelicula = (edad, tieneAutorizacion) => {
    
    if(edad >= 15 || tieneAutorizacion) {

        return true

    }

    else {

        return false

    }

}

console.log(puedeVerPelicula(12, false)) // false
console.log(puedeVerPelicula(12, true))  // true
console.log(puedeVerPelicula(16, false)) // true
console.log(puedeVerPelicula(18, true))  // true

// -----------------------------------------
// estaEnRango(valor, minimo, maximo)
// -----------------------------------------

console.log("Ejercicio 2: estaEnRango")

const estaEnRango = (valor, mínimo, máximo) => {

    if(mínimo <= valor && máximo >= valor) {

        return true

    }

    else {

        return false

    }

}

console.log(estaEnRango(3, 1, 10))   // true
console.log(estaEnRango(1, 1, 10))   // true
console.log(estaEnRango(10, 1, 10))  // true
console.log(estaEnRango(12, 1, 10))  // false
console.log(estaEnRango(-3, 1, 10))  // false

// -----------------------------------------
// puedeAvanzar(colorSemaforo)
// -----------------------------------------

console.log("Ejercicio 3: colorSemáforo")

const puedeAvanzar = (colorSemaforo) => {

    if(colorSemaforo == "verde") {

        return true

    }

    else if(colorSemaforo == "amarillo" || colorSemaforo == "rojo") {

        return false

    }

    else {

        return "Error: color de semáforo inválido"

    }
}

console.log(puedeAvanzar('verde'))     // true
console.log(puedeAvanzar('amarillo'))  // false
console.log(puedeAvanzar('rojo'))      // false
console.log(puedeAvanzar('lila'))      // 'Error: color de semáforo inválido'

// -----------------------------------------
// esVocal(letra)
// -----------------------------------------

console.log("Ejercicio 4: esVocal")

const esVocal = (letra) => {

    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {

        return true
    }

    else {

        return false

    }

}

console.log(esVocal('s')) // false
console.log(esVocal('o')) // true
console.log(esVocal('f')) // false
console.log(esVocal('i')) // true
console.log(esVocal('a')) // true


// -----------------------------------------
// esConsonante(letra)
// -----------------------------------------
console.log("Ejercicio 5: esConsonante")

const esConsonante = (letra) => {

    if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {

        return false
    }

    else {

        return true

    }

}

console.log(esConsonante('a')) // false
console.log(esConsonante('n')) // true
console.log(esConsonante('e')) // false

// -----------------------------------------
// puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)
// -----------------------------------------
console.log("Ejercicio 6: puedeRenovarCarnet(pasoTests, tieneMultasImpagas, pagoImpuestos)")

const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {

    if(pasoTests && tieneMultasImpagas == false && pagoImpuestos) {

        return true
    }

    else {

        return false
    }
}

console.log(puedeRenovarCarnet(true, true, true))    // false
console.log(puedeRenovarCarnet(true, true, false))   // false
console.log(puedeRenovarCarnet(true, false, true))   // true
console.log(puedeRenovarCarnet(true, false, false))  // false
console.log(puedeRenovarCarnet(false, true, true))   // false
console.log(puedeRenovarCarnet(false, true, false))  // false
console.log(puedeRenovarCarnet(false, false, true))  // false
console.log(puedeRenovarCarnet(false, false, false)) // false

// -----------------------------------------
// puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)
// -----------------------------------------
console.log("Ejercicio 7: puedeGraduarse")

const puedeGraduarse = (asistencia, materiasAprobadas, tesisAprobada) => {

    if(asistencia >= 75 && materiasAprobadas >= 50 && tesisAprobada) {

        return true

    }

    else {

        return false
    }

}

console.log(puedeGraduarse(80, 50, true))  // true
console.log(puedeGraduarse(80, 50, false)) // false
console.log(puedeGraduarse(80, 45, true))  // false
console.log(puedeGraduarse(80, 45, false)) // false
console.log(puedeGraduarse(65, 50, true))  // false
console.log(puedeGraduarse(33, 55, false)) // false
console.log(puedeGraduarse(42, 45, true))  // false
console.log(puedeGraduarse(28, 45, false)) // false

// -----------------------------------------
// esParOImpar(numero)
// -----------------------------------------
console.log("Ejercicio 8: esParOImpar")

const esParOImpar = (numero) => {

    if((numero %= 2) == 0) {

        return "par"
    }

    else {

        return "impar"
    }
}

console.log(esParOImpar(3))  // 'impar'
console.log(esParOImpar(10)) // 'par'

// -----------------------------------------
//  esPositivoONegativo(numero)
// -----------------------------------------

console.log("Ejercicio 9: esPositivoONegativo")

const esPositivoONegativo = (numero) => {

    if (numero >= 0) {

        return "positivo"

    }

    else {

        return "negativo"

    }

}

console.log(esPositivoONegativo(3))  // 'positivo'
console.log(esPositivoONegativo(-5)) // 'negativo'


// -----------------------------------------
//  avanzarSemaforo(colorActual)
// -----------------------------------------
console.log("Ejercicio 10: avanzarSemaforo")

const avanzarSemaforo = (colorActual) => {

    if(colorActual == "verde") {

        return "amarillo"

    }

    else if(colorActual == "amarillo") {
        
        return "rojo"

    }

    else {

        return "verde"
    }
}

console.log(avanzarSemaforo('verde'))     // 'amarillo'
console.log(avanzarSemaforo('amarillo'))  // 'rojo'
console.log(avanzarSemaforo('rojo'))      // 'verde'

// -----------------------------------------
//  obtenerSensacion(temperatura)
// -----------------------------------------
console.log("Ejercicio 11: obtenerSensacion")

const obtenerSensacion = (temperatura) => {

    if (temperatura < 0) {

        return "¡Está helando!"
    }

    else if (0 <= temperatura && temperatura < 15) {

        return "¡Hace frío!"

    }

    else if (15 <= temperatura && temperatura < 25) {

        return "Está lindo"
    }

    else if (25 <= temperatura && temperatura < 30) {

        return "Hace calor"
    }

    else {

        return "¡Hace mucho calor!"

    }
}

console.log(obtenerSensacion(33)) // "¡Hace mucho calor!"
console.log(obtenerSensacion(28)) // "Hace calor"
console.log(obtenerSensacion(20)) // "Está lindo"
console.log(obtenerSensacion(10)) // "¡Hace frío!"
console.log(obtenerSensacion(-2)) // "¡Está helando!"

// -----------------------------------------
//  obtenerNota(puntaje)
// -----------------------------------------
console.log("Ejercicio 12: obtenerNota")

const obtenerNota = (puntaje) => {

    if (puntaje < 6) {

        return "Desaprobado :("
    }

    else if (6 <= puntaje && puntaje < 7) {

        return "Regular"
    }

    else if (7 <= puntaje && puntaje < 8) {

        return "Bueno"
    }

    else if (8 <= puntaje && puntaje < 10) {

        return "Muy Bueno"
    }

    else if (puntaje == 10) {

        return "Excelente! :D"
    }

    else {

        return "Puntaje inválido"
    }

}

console.log(obtenerNota(7))    // "Bueno"
console.log(obtenerNota(9.6))  // "Excelente" <-- no! "Muy bueno" Excelente es 10 solamente
console.log(obtenerNota(12))   // "Puntaje inválido"

// -----------------------------------------
// jugarPiedraPapelTijera(a, b)
// -----------------------------------------
console.log("Ejercicio 13: jugarPiedraPapelTijera")

const jugarPiedraPapelTijera = (a, b) => {

    if (a == 'piedra') {
        if (b == 'papel') {
            return "¡Ganó papel!"
        }

        else if (b == 'tijera') {
            return "¡Ganó piedra!"
        }
        
        else {
             return "Empate"
        }
    }

    if (a == 'papel') {
        if (b == 'piedra') {
            return "¡Ganó papel!"
        }

        else if (b == 'tijera') {
            return "¡Ganó tijera!"
        }
        
        else {
             return "Empate"
        }
    }

    if (a == 'tijera') {
        if (b == 'piedra') {
            return "¡Ganó piedra!"
        }

        else if (b == 'papel') {
            return "¡Ganó tijera!"
        }
        
        else {
             return "Empate"
        }
    }

}

console.log(jugarPiedraPapelTijera('tijera', 'piedra'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('piedra', 'tijera'))  // ¡Ganó piedra!
console.log(jugarPiedraPapelTijera('papel', 'piedra'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('piedra', 'papel'))   // ¡Ganó papel!
console.log(jugarPiedraPapelTijera('papel', 'tijera'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('tijera', 'papel'))   // ¡Ganó tijera!
console.log(jugarPiedraPapelTijera('piedra', 'piedra'))  // ¡Empate!
console.log(jugarPiedraPapelTijera('papel', 'papel'))    // ¡Empate!
console.log(jugarPiedraPapelTijera('tijera', 'tijera'))  // ¡Empate!

// -----------------------------------------
//              @Luzyla
// -----------------------------------------
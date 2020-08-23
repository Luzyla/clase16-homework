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
console.log("Ejercicio 7: puedeGraduarse(asistencia, materiasAprobadas, tesisAprobada)")

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



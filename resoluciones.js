// EJERCICIO 1
/*
const pedirDocumentacion = (mensaje) => {
    let culpable = prompt(`${mensaje}`); // si, no
  
    if (culpable == 'si') {
      console.log('irás a la cárcel');
    } else if (culpable == 'no') {
      console.log('irás a casa');
    } else {
      pedirDocumentacion('Ingresaste una respuesta invalida, por favor responda por si o no. Eres culpable?');
    }
  };
  
pedirDocumentacion('Eres culpable?');
*/

// EJERCICIO 2
/*
let anioNacimiento = parseInt(prompt('Que anio naciste?', 0))
const detectarGeneracion = (anio) => {
    if (anio >= 1930 && anio <= 1948) {
        console.log('Eres Silent Generation')
    } else if (anio >= 1949 && anio <= 1968) {
        console.log('Eres Baby Boom')
    } else if (anio >= 1969 && anio <= 1980) {
        console.log('Eres Generacion X')
    } else if (anio >= 1981 && anio <= 1993) {
        console.log('Eres Millennial!')
    } else if (anio >= 1994 && anio <= 2010) {
        console.log('Eres Centenial!')
    } else {
        console.log('Eres ancestral')
    }
}
detectarGeneracion(anioNacimiento)
*/

// EJERCICIO 3
/*
const puedeVerPelicula = (edad, tieneAutorizacion) => (edad >= 15) || tieneAutorizacion;

console.log(puedeVerPelicula(12, false)); 
console.log(puedeVerPelicula(12, true)); 
console.log(puedeVerPelicula(16, false));
console.log(puedeVerPelicula(18, true)); 
*/

// EJERCICIO 4
/*
const estaEnRango = (valor, minimo, maximo) => (valor >= minimo) && (valor <= maximo);
*/

// EJERCICIO 5
/*
const puedeAvanzar = (colorSemaforo) => {
    if (colorSemaforo == 'verde') {
        return true
    } else if (colorSemaforo == 'rojo') {
        return false
    } else if (colorSemaforo == 'amarillo') {
        return false
    } else {
        console.log('Error, color invalido')
    }
}
*/

// EJERCICIO 6
/*
const puedeRenovarCarnet = (pasoTests, tieneMultasImpagas, pagoImpuestos) => {
    if (pasoTests && !tieneMultasImpagas && pagoImpuestos) {
        return true
    } else {
        return false
    }
}
*/
/* EJERCICIO 1
Crear un programa que le pregunte al usuario si es culpable o no. Si es culpable, mostrar por consola
un mensaje que diga "Iras a la carcel" mientras que si no lo es, diga "Iras a casa". En caso de que
se ingrese una respuesta invalida, que vuelva a pedir la documentacion.
*/

/* EJERCICIO 2
Crear un programa que le pregunte al usuario su anio de nacimiento, y le notifique a que generacion pertenece:
- Silent Generation de 1930 a 1948
- Baby Boom de 1949 a 1968
- Generacion X de 1969 a 1980
- Generacion Y (Millennials) de 1981 a 1993
- Generacion Z (Centenials) de 1994 a 2010
Si no encuentra el anio, que muestre un mensaje que diga "Eres ancestral"
*/

/* EJERCICIO 3
Crear una función puedeVerPelicula que tome como argumentos un número edad y un booleano tieneAutorizacion, 
y devuelva true si la persona está habilitada para ver la película o false si no. Sólo puede ver la película si: 
tiene 15 años o más, o tiene autorización de sus padres.

let tieneAutorizacion = true/false;
*/

/* EJERCICIO 4
Crear una función estaEnRango que tome como argumentos tres números, un valor, un número minimo y un número maximo, 
y devuelva true si el valor se encuentra entre los números minimo y maximo o false si no (si el valor es igual a uno de los extremos 
se considera que está dentro del rango)

Se espera que al ejecutar los siguientes ejemplos, se obtengan los outputs aclarados:

console.log(estaEnRango(3, 1, 10));  // true
console.log(estaEnRango(1, 1, 10));  // true
console.log(estaEnRango(10, 1, 10)); // true
console.log(estaEnRango(12, 1, 10)); // false
console.log(estaEnRango(-3, 1, 10));  // false
*/

/* EJERCICIO 5
Crear una función puedeAvanzar que tome como argumento un string con el color del semáforo y devuelva true si puede avanzar o 
false si no. Si no se ingresa un color válido, debe devolver un string que diga: Error: color de semáforo inválido

Se espera que al ejecutar los siguientes ejemplos, se obtengan los outputs aclarados:

console.log(puedeAvanzar('verde'));     // true
console.log(puedeAvanzar('amarillo'));  // false
console.log(puedeAvanzar('rojo'));      // false
console.log(puedeAvanzar('lila'));      // 'Error: color de semáforo inválido'
*/

/* EJERCICIO 6
Crear una función puedeRenovarCarnet que tome como argumentos tres booleanos, pasoTests, tieneMultasImpagas y pagoImpuestos, 
y devuelva true si una persona está habilitada para renovar su carnet de conducir o false si no. Una persona puede renovar su 
carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos

Se espera que al ejecutar los siguientes ejemplos, se obtengan los outputs aclarados:

puedeRenovarCarnet(true, true, true)    // false
puedeRenovarCarnet(true, true, false)   // false
puedeRenovarCarnet(true, false, true)   // true
puedeRenovarCarnet(true, false, false)  // false
puedeRenovarCarnet(false, true, true)   // false
puedeRenovarCarnet(false, true, false)  // false
puedeRenovarCarnet(false, false, true)  // false
puedeRenovarCarnet(false, false, false) // false
*/

/* EJERCICIO 7
Crear una función puedeGraduarse que tome como argumentos dos números asistencia y materiasAprobadas y un booleano tesisAprobada, 
y devuelva true si una persona puede gruadarse o false si no. Una persona puede graduarse si tiene un 75% de asistencia o más, 
50 materias aprobadas o más y la tesis aprobada.

Se espera que al ejecutar los siguientes ejemplos, se obtengan los outputs aclarados:

puedeGraduarse(80, 50, true)  // true
puedeGraduarse(80, 50, false) // false
puedeGraduarse(80, 45, true)  // false
puedeGraduarse(80, 45, false) // false
puedeGraduarse(65, 50, true)  // false
puedeGraduarse(33, 55, false) // false
puedeGraduarse(42, 45, true)  // false
puedeGraduarse(28, 45, false) // false
*/

/* EJERCICIO 8
Crear una función esParOImpar que acepte como argumento un numero y devuelva el string par si el numero es par, o el string impar si el numero es impar.

Se espera que al ejecutar los siguientes ejemplos, se obtengan los outputs aclarados:

console.log(esParOImpar(3)); // 'impar'
console.log(esParOImpar(10)); // 'par'
console.log(esParOImpar(31)); // 'impar'
console.log(esParOImpar(98)); // 'par'
console.log(esParOImpar(55)); // 'impar'
console.log(esParOImpar(1042)); // 'par'
*/

/* EJERCICIO 9
Crear una función esPositivoONegativo que acepte como argumento un numero y devuelva el string positivo si el numero es positivo, 
o el string negativo si el numero es negativo

esPositivoONegativo(3)  // 'positivo'
esPositivoONegativo(-5) // 'negativo'
*/

/* EJERCICIO 10
Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes
*/

/* EJERCICIO 11
Crear una función obtenerSensacion que tome como argumento un número temperatura y devuelva un string dependiendo de la temperatura, con las siguientes reglas:

// Menor a 0°	                            => ¡Está helando!
// Mayor o igual a 0° y menor a 15°	        => ¡Hace frío!
// Mayor o igual a 15° y menor a 25°	    => Está lindo
// Mayor o igual a entre 25° y menor a 30°	=> Hace calor
// Mayor o igual de 30°	                    => ¡Hace mucho calor!
*/

/* EJERCICIO 12 => OJITO CON ESTE !!!
Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) 
y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate).

jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!
*/

/* EJERCICIO 13
Crear un programa que muestre el dinero inicial, y que permita retirar dinero preguntando cuánto se desea retirar, y mostrando 
el dinero restante a continuación. Si se intenta retirar más dinero del disponible, o no cuenta con dinero disponible, 
debe mostrar un mensaje alertándolo e impedir seguir retirando.
*/
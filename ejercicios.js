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


//https://repl.it/repls/GleamingDotingEvents

/*Skylab Airlines!

Programa una inferfaz de usuario para una aerolinea (por terminal...). Esta aerolinea dispondrá de 10 vuelos para el dia de hoy, para empezar, estos vuelos estarán declarados de manera global, cuando se llame a la función:

Se preguntará por el nombre de usuario y dará la bienvenida.
El usuario visualizará todos los vuelos disponibles de una forma amigable: El vuelo con origen: Barcelona, y destino: Madrid tiene un coste de XXXX€ y no realiza ninguna escala.
A continuación, el usuario verá el coste medio de los vuelos.
También podrá ver cuantos vuelos efectúan escalas.
Y, sabiendo que los ultimos 5 vuelos (los últimos 5 ID's) son los últimos del día, muestra al usuario sus destinos.
*/

// This is a example of array of objects... each position of array contains one object...
var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]
//console.log(flights[0].to) //output: New York

function Airline(name){
  
  console.log('Bienvenid@ ' + name);
  
  var escala;
  var sum = 0;
  var hacenEscala= 0;
  var destinos = [];
      
  flights.forEach(function(obj){///obj es un alias de cada eleme
    if (obj.scale === true){
      escala = 'sí';
      hacenEscala++;
    } else {
      escala = 'no';
    }
    console.log('El vuelo con origen: ' + obj.from + ', y destino: ' + obj.to + ' tiene un coste de ' + obj.cost + '€ y ' + escala + ' realiza escala.')

    sum = sum + obj.cost;
    
    destinos.push(obj.to);
    
  }) 
  
  var avg = sum/flights.length;
  console.log('El coste medio de los vuelos es ' + avg);
  
  console.log(hacenEscala + ' vuelos hacen escalas');
  
  var ultimos = destinos.splice(5);

  console.log('Los destinos de los últimos 5 vuelos son: ' + ultimos.join(', ' ));
  
}

Airline('Citlas');
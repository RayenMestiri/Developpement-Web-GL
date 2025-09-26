// TP1 - Fonctionnalités ES6+
// Fichier principal pour tester les différents exercices

// Exercice 1: Variables (let/const vs var)
console.log('=== Exercice 1: Variables ===');

// TODO: Refactorisez ce code pour utiliser let/const
function exercice1() {
  // Remplacez var par let/const selon le contexte
  var name = 'JavaScript';
  var version = 'ES6+';
  var features = ['let', 'const', 'arrow functions'];
  
  console.log(`Langage: ${name}, Version: ${version}`);
  console.log('Fonctionnalités:', features);
}

// Exercice 2: Arrow Functions
console.log('=== Exercice 2: Arrow Functions ===');

// TODO: Convertissez ces fonctions en arrow functions
function add(a, b) {
  return a + b;
}

function multiply(x) {
  return function(y) {
    return x * y;
  };
}

// Exercice 3: Template Literals
console.log('=== Exercice 3: Template Literals ===');

// TODO: Utilisez les template literals pour créer ces chaînes
function createUserMessage(user) {
  var message = 'Bonjour ' + user.name + ', vous avez ' + user.age + ' ans.';
  return message;
}

// Exercice 4: Destructuring
console.log('=== Exercice 4: Destructuring ===');

// TODO: Utilisez le destructuring pour extraire ces valeurs
function exercice4() {
  const person = {
    firstName: 'Jean',
    lastName: 'Dupont',
    age: 30,
    address: {
      street: '123 rue de la Paix',
      city: 'Paris'
    }
  };
  
  const colors = ['rouge', 'vert', 'bleu', 'jaune'];
  
  // Extraire firstName, lastName, et city avec destructuring
  const firstName = person.firstName;
  const lastName = person.lastName;
  const city = person.address.city;
  
  // Extraire les deux premiers couleurs avec destructuring
  const first = colors[0];
  const second = colors[1];
  
  console.log(`${firstName} ${lastName} habite à ${city}`);
  console.log(`Première couleur: ${first}, Deuxième: ${second}`);
}

// Exercice 5: Spread et Rest
console.log('=== Exercice 5: Spread et Rest ===');

// TODO: Implémentez ces fonctions avec spread/rest
function combineArrays(arr1, arr2) {
  // Combinez les tableaux avec spread
  return arr1.concat(arr2);
}

function sum() {
  // Utilisez rest parameters pour accepter n'importe quel nombre d'arguments
  var result = 0;
  for (var i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return result;
}

// Exercice 6: Classes ES6
console.log('=== Exercice 6: Classes ES6 ===');

// TODO: Convertissez cette fonction constructeur en classe ES6
function Vehicle(make, model) {
  this.make = make;
  this.model = model;
}

Vehicle.prototype.getInfo = function() {
  return this.make + ' ' + this.model;
};

// TODO: Créez une classe Car qui hérite de Vehicle
// avec une méthode start()

// Tests et démonstrations
if (typeof module !== 'undefined' && module.exports) {
  // Export pour les tests Node.js
  module.exports = {
    exercice1,
    add,
    multiply,
    createUserMessage,
    exercice4,
    combineArrays,
    sum,
    Vehicle
  };
} else {
  // Exécution dans le navigateur
  exercice1();
  exercice4();
  
  console.log('Addition:', add(5, 3));
  console.log('Message utilisateur:', createUserMessage({name: 'Alice', age: 25}));
  console.log('Arrays combinés:', combineArrays([1, 2], [3, 4]));
  console.log('Somme:', sum(1, 2, 3, 4, 5));
}
// Tests pour TP1 - Fonctionnalités ES6+
const { 
  add, 
  multiply, 
  createUserMessage, 
  combineArrays, 
  sum, 
  Vehicle 
} = require('../src/index.js');

describe('TP1 - Fonctionnalités ES6+', () => {
  
  describe('Exercice 2: Arrow Functions', () => {
    test('add function should return sum of two numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
    });
    
    test('multiply should return a curried function', () => {
      const multiplyBy2 = multiply(2);
      expect(multiplyBy2(5)).toBe(10);
      expect(multiply(3)(4)).toBe(12);
    });
  });
  
  describe('Exercice 3: Template Literals', () => {
    test('createUserMessage should format user info correctly', () => {
      const user = { name: 'Alice', age: 25 };
      const expected = 'Bonjour Alice, vous avez 25 ans.';
      expect(createUserMessage(user)).toBe(expected);
    });
  });
  
  describe('Exercice 5: Spread et Rest', () => {
    test('combineArrays should merge two arrays', () => {
      const result = combineArrays([1, 2], [3, 4]);
      expect(result).toEqual([1, 2, 3, 4]);
    });
    
    test('sum should accept variable number of arguments', () => {
      expect(sum(1, 2, 3)).toBe(6);
      expect(sum(1, 2, 3, 4, 5)).toBe(15);
      expect(sum()).toBe(0);
    });
  });
  
  describe('Exercice 6: Classes ES6', () => {
    test('Vehicle constructor should work', () => {
      const car = new Vehicle('Toyota', 'Camry');
      expect(car.make).toBe('Toyota');
      expect(car.model).toBe('Camry');
      expect(car.getInfo()).toBe('Toyota Camry');
    });
  });
  
  // Tests pour vérifier l'utilisation des bonnes pratiques ES6+
  describe('Bonnes pratiques ES6+', () => {
    test('should use const for immutable variables', () => {
      // Ce test vérifie que le code étudiant utilise const appropriément
      // Il sera mis à jour une fois le code refactorisé
      expect(true).toBe(true); // Placeholder
    });
    
    test('should use let for mutable variables', () => {
      // Ce test vérifie que le code étudiant utilise let appropriément
      expect(true).toBe(true); // Placeholder
    });
    
    test('should use arrow functions where appropriate', () => {
      // Ce test vérifie l'utilisation des arrow functions
      expect(true).toBe(true); // Placeholder
    });
  });
});
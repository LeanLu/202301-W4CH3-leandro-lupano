import { King } from './King';

describe('Given the class King', () => {
  describe('When we create a Character King ', () => {
    test('Then if the properties are ("Leon", "King", 34, 20), it should create an object with 4 properties', () => {
      const newCharacter = new King('Leon', 'King', 34, 20);

      expect(newCharacter).toHaveProperty('characterName');
      expect(newCharacter).toHaveProperty('family');
      expect(newCharacter).toHaveProperty('age');
      expect(newCharacter).toHaveProperty('regnalYears');
    });

    test('Then the status have to be true, and after kill should be false', () => {
      const newCharacter = new King('Leon', 'King', 34, 20);
      expect(newCharacter.status).toBe(true);
      newCharacter.kill();
      expect(newCharacter.status).toBe(false);
    });

    test('Then the character should have the greeting method', () => {
      const newCharacter = new King('Leon', 'King', 34, 20);
      const result = `Vais a morir todos`;
      expect(newCharacter.greeting()).toBe(result);
    });
  });
});

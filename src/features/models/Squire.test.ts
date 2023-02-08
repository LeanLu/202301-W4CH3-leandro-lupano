import { Squire } from './Squire';
import { Fighter } from './Fighter';

describe('Given the class Squire', () => {
  describe('When we create a Character Squire ', () => {
    test('Then if the properties are ("Leon", "Squire", 35, new Fighter, 7), it should create an object with 5 properties', () => {
      const characterServed = new Fighter('Carlos', 'King', 30, 'sword', 6);
      const newCharacter = new Squire('Leon', 'Squire', 35, characterServed, 7);

      expect(newCharacter).toHaveProperty('characterName');
      expect(newCharacter).toHaveProperty('family');
      expect(newCharacter).toHaveProperty('age');
      expect(newCharacter).toHaveProperty('characterServed');
      expect(newCharacter).toHaveProperty('gradeOfServe');
    });

    test('Then the status have to be true, and after kill should be false', () => {
      const characterServed = new Fighter('Carlos', 'King', 30, 'sword', 6);
      const newCharacter = new Squire('Leon', 'Squire', 35, characterServed, 7);
      expect(newCharacter.status).toBe(true);
      newCharacter.kill();
      expect(newCharacter.status).toBe(false);
    });

    test('Then the character should have the greeting method', () => {
      const characterServed = new Fighter('Carlos', 'King', 30, 'sword', 6);
      const newCharacter = new Squire('Leon', 'Squire', 35, characterServed, 7);
      const result = `Soy un loser`;
      expect(newCharacter.greeting()).toBe(result);
    });
  });
});

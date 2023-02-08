import { Fighter } from './Fighter';

describe('Given the class Fighter', () => {
  describe('When we create a Character Fighter ', () => {
    test('Then if the properties are ("Leon", "Fighter", 34, "sword", 10), it should create an object with 7 properties', () => {
      const newCharacter = new Fighter('Leon', 'Fighter', 34, 'sword', 10);

      expect(newCharacter).toHaveProperty('characterName');
      expect(newCharacter).toHaveProperty('family');
      expect(newCharacter).toHaveProperty('age');
      expect(newCharacter).toHaveProperty('status');
      expect(newCharacter).toHaveProperty('serie');
      expect(newCharacter).toHaveProperty('weapon');
      expect(newCharacter).toHaveProperty('skill');
    });

    test('Then the status have to be true, and after kill should be false', () => {
      const newCharacter = new Fighter('Leon', 'Fighter', 34, 'sword', 10);
      expect(newCharacter.status).toBe(true);
      newCharacter.kill();
      expect(newCharacter.status).toBe(false);
    });

    test('Then the character should have the greeting method', () => {
      const newCharacter = new Fighter('Leon', 'Fighter', 34, 'sword', 10);
      const result = `Primero pego y luego pregunto`;
      expect(newCharacter.greeting()).toBe(result);
    });
  });
});

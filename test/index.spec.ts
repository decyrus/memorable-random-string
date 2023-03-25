import generateMemorableRandomString from '../src';

describe('generateMemorableRandomString', () => {
  test('should return a string with the specified length', () => {
    const length = 10;
    const result = generateMemorableRandomString(length);
    expect(result.length).toBe(length);
  });

  test('should only contain alternating consonants and vowels', () => {
    const length = 10;
    const result = generateMemorableRandomString(length);
    const isConsonant = (char: string) => /[bcdfghjklmnpqrstvwxyz]/.test(char);
    const isVowel = (char: string) => /[aeiou]/.test(char);
    for (let i = 0; i < length; i++) {
      if (i % 2 === 0) {
        expect(isConsonant(result[i])).toBe(true);
      } else {
        expect(isVowel(result[i])).toBe(true);
      }
    }
  });
});

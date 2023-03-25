export default function generateMemorableRandomString(length: number): string {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  const vowels = 'aeiou';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomConsonantIndex = Math.floor(Math.random() * consonants.length);
    const randomVowelIndex = Math.floor(Math.random() * vowels.length);
    if (i % 2 === 0) {
      result += consonants[randomConsonantIndex];
    } else {
      result += vowels[randomVowelIndex];
    }
  }
  return result;
}

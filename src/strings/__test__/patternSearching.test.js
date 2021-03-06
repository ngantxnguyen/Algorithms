import {
  patternSearchSA,
  patternSearchKMP,
  patternSearchBoyerMoore,
  patternSearchZAlgorithm,
  patternSearchRabinKarp,
} from '../patternSearching';

describe('Test all Pattern Searching Algorithms', () => {
  const test0 = [];
  const test1 = ['abababa'];
  const test2 = ['abababa', ''];
  const test3 = ['abababa', 'aba'];
  const test4 = ['abc', 'abcdef'];
  const test5 = ['P@TTerNabcdefP@TTerNP@TTerNabcdefabcdefabcdefabcdefP@TTerN', 'P@TTerN'];
  const test6 = ['ababababa', 'a'];
  const test7 = ['123456', '123456'];
  const test8 = ['ABABAAABAABAB', 'AA'];
  const test9 = ['SAAT TE', 'TE'];
  const test10 = ['Sample text for testing the Boyer-Moore algorithm.', 'te'];
  const test11 = ['Sample text for testing the Boyer-Moore algorithm.', ' '];
  const test12 = ['AAAAAAA', 'AA'];

  const occurences = (search, method) => {
    test(`Test Pattern Searching using ${method} algorithm`, () => {
      expect(search(...test0)).toStrictEqual([]);
      expect(search(...test1)).toStrictEqual([]);
      expect(search(...test2)).toStrictEqual([]);
      expect(search(...test3)).toStrictEqual([0, 2, 4]);
      expect(search(...test4)).toStrictEqual([]);
      expect(search(...test5)).toStrictEqual([0, 13, 20, 51]);
      expect(search(...test6)).toStrictEqual([0, 2, 4, 6, 8]);
      expect(search(...test7)).toStrictEqual([0]);
      expect(search(...test8)).toStrictEqual([4, 5, 8]);
      expect(search(...test9)).toStrictEqual([5]);
      expect(search(...test10)).toStrictEqual([7, 16]);
      expect(search(...test11)).toStrictEqual([6, 11, 15, 23, 27, 39]);
      expect(search(...test12)).toStrictEqual([0, 1, 2, 3, 4, 5]);
    });
  };

  test('Test Pattern Searching using Suffix Array', () => {
    expect(patternSearchSA(...test0)).toBe(-1);
    expect(patternSearchSA(...test1)).toBe(-1);
    expect(patternSearchSA(...test2)).toBe(-1);
    expect(patternSearchSA(...test3)).not.toBe(-1);
    expect(patternSearchSA(...test4)).toBe(-1);
    expect(patternSearchSA(...test5)).not.toBe(-1);
    expect(patternSearchSA(...test6)).not.toBe(-1);
    expect(patternSearchSA(...test7)).toBe(0);
    expect(patternSearchSA(...test8)).not.toBe(-1);
    expect(patternSearchSA(...test9)).not.toBe(-1);
    expect(patternSearchSA(...test10)).not.toBe(-1);
    expect(patternSearchSA(...test11)).not.toBe(-1);
    expect(patternSearchSA(...test12)).not.toBe(-1);
  });

  occurences(patternSearchKMP, 'KMP');
  occurences(patternSearchBoyerMoore, 'Boyer-Moore');
  occurences(patternSearchZAlgorithm, 'Z Algorithm');
  occurences(patternSearchRabinKarp, 'Rabin-Karp Algorithm');
});

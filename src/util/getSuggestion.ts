import editDistance from 'damerau-levenshtein';

// Minimum edit distance to be considered a good suggestion.
const THRESHOLD = 2;

/**
 * Returns an array of suggestions given a word and a dictionary and limit of
 * suggestions to return.
 */
export default function getSuggestion(
  word: string,
  dictionary: string[] = [],
  limit = 2,
) {
  const distances = dictionary.flatMap((dictionaryWord) => {
    const distance = editDistance(
      word.toUpperCase(),
      dictionaryWord.toUpperCase(),
    );
    const { steps } = distance;
    return steps <= THRESHOLD ? [{ word: dictionaryWord, steps }] : [];
  });

  return distances
    .sort((a, b) => a.steps - b.steps) // Sort by distance
    .slice(0, limit)
    .map((distance) => distance.word);
}

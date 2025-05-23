import editDistance from 'damerau-levenshtein';

// Minimum edit distance to be considered a good suggestion.
const THRESHOLD = 2;

/**
 * Returns an array of suggestions given a word and a dictionary and limit of
 * suggestions to return.
 */
export default function getSuggestion(word, dictionary = [], limit = 2) {
  const distances = Object.fromEntries(
    dictionary.map(dictionaryWord => {
      const distance = editDistance(
        word.toUpperCase(),
        dictionaryWord.toUpperCase(),
      );
      const { steps } = distance;
      return [dictionaryWord, steps];
    }),
  );

  return Object.keys(distances)
    .filter(suggestion => distances[suggestion] <= THRESHOLD)
    .sort((a, b) => distances[a] - distances[b]) // Sort by distance
    .slice(0, limit);
}

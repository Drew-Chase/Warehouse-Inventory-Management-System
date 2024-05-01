/**
 * Calculates the Levenshtein distance between two strings.
 *
 * @param {string} a - The first string.
 * @param {string} b - The second string.
 * @returns {number} The minimum number of operations required to transform string `a` to string `b`.
 */
function distance(a, b) {
    const aLen = a.length;
    const bLen = b.length;
    const distances = [];
    for (let i = 0; i <= aLen; i++) {
        distances[i] = [i];
    }
    for (let j = 0; j <= bLen; j++) {
        distances[0][j] = j;
    }
    for (let i = 1; i <= aLen; i++) {
        for (let j = 1; j <= bLen; j++) {
            const cost = a[i - 1] === b[j - 1] ? 0 : 1;
            distances[i][j] = Math.min(distances[i - 1][j] + 1, // deletion
            distances[i][j - 1] + 1, // insertion
            distances[i - 1][j - 1] + cost // substitution
            );
        }
    }
    return distances[aLen][bLen];
}
/**
 * Searches for items in a given array based on a query string and a distance threshold.
 *
 * @param {string} query - The query string to search for.
 * @param {string[]} items - The array of items to search through.
 * @param {number} [threshold=3] - The maximum allowed distance between the query and an item.
 * @return {string[]} - The array of items that match the search criteria.
 */
function search(query, items, threshold = 3) {
    return items
        .map(item => ({ item, distance: distance(query, item) }))
        .filter(({ distance }) => distance <= threshold)
        .sort((a, b) => a.distance - b.distance)
        .map(({ item }) => item);
}
export { search };
//# sourceMappingURL=fuzzy-search.js.map
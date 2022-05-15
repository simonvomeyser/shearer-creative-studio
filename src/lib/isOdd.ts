export function isOdd(number: number) {
    if (number === 0) {
        return false
    }

    return !!(number % 2);
}
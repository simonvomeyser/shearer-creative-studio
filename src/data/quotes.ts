export type QuoteDataType = {
    body: string,
    author?: string,
    preventCta?: boolean,
}

export const quotes: QuoteDataType[] = [
    {
        body: 'I consider hair my weapon of choice when it comes to self-expression.',
    },
    {
        body: 'Die Qualität deiner Haare ist uns immer wichtiger als der neueste Trend',
    },
    {
        body: 'Invest in your hair - it\'s the crown you never take off.',
    },
    {
        body: 'Also komm! Lass uns deine Individualität feiern.',
    },
    {
        body: 'Wir verkaufen dir keinen neuen Haarschnitt. Wir helfen dir, deine ganz eigene Idee von dir selbst nach außen zu tragen. ',
    },
    {
        body: 'Leben heißt Veränderung sagte der Stein zur Blume und flog davon',
        preventCta: true,
    },
];

export function getRandomQuote(): QuoteDataType {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
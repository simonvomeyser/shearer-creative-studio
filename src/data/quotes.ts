export type QuoteDataType = {
    body: string,
    author?: string,
    preventCta?: boolean,
}

export const quotes: QuoteDataType[] = [
    {
        body: 'I consider hair my weapon of choice when it comes to self-expression.',
        author: 'Sarah Scherer',
        preventCta: true,
    },
    {
        body: 'Die Qualität deiner Haare ist uns immer wichtiger als der neueste Trend',
        author: 'Sarah Scherer',
    },
    {
        body: 'Invest in your hair - it\'s the crown you never take off.',
        author: 'Sarah Scherer',
    },
    {
        body: 'Also komm! Lass uns deine Individualität feiern.',
        author: 'Sarah Scherer',
    },
    {
        body: 'Individualität feiern, egal wo du dich auf dem Genderspektrum siehst!',
    },
];

export function getRandomQuote(): QuoteDataType {
    return quotes[Math.floor(Math.random() * quotes.length)];
}
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        screens: {
            'xs': '376px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            '3xl': '1600px',
        },
        extend: {
            zIndex: {
                'header': 200,
                'container': 100,
                'watercolor': 50,
                'section': 0, // To create stacking context
                'section--overlap': 1, // To overlap following sections
            },
            fontFamily: {
                sans: ['lexend', 'serif'],
                roma: ['roma', 'sans-serif'],
            },
            colors: {
                'sage-500': 'var(--sage-500)',
                'sage-700': 'var(--sage-700)',
                'mango-50': 'var(--mango-50)',
                'mango-100': 'var(--mango-100)',
                'mango-200': 'var(--mango-200)',
                'mango-300': 'var(--mango-300)',
                'mango-400': 'var(--mango-400)',
                'mango-500': 'var(--mango-500)',
                'mango-600': 'var(--mango-600)',
                'mango-700': 'var(--mango-700)',
                'mango-800': 'var(--mango-800)',
                'mango-900': 'var(--mango-900)',
                's-black': 'var(--s-black)',
                's-gray-500': 'var(--s-gray-500)',
                'primary': 'var(--primary)',
                'secondary': 'var(--secondary)',
            }
        },
    },
    plugins: [],
}

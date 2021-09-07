module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                navCol:

                {
                    50: '#e8f3ff',
                    100: '#cbd7e9',
                    200: '#abbdd4',
                    300: '#2B3148',
                    400: '#6b88ad',
                    500: '#526e94',
                    600: '#3f5674',
                    700: '#2c3d54',
                    800: '#172535',
                    900: '#020d19',
                },

            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
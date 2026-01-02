/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                marine: "#222831",    // Background
                gunmetal: "#393E46",  // Secondary/Cards
                teal: "#00ADB5",      // Accent/Primary
                mist: "#EEEEEE",      // Text
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            cursor: {
                fancy: 'url(/cursor.svg), auto',
            }
        },
    },
    plugins: [],
}

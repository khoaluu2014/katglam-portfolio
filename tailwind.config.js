/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            roboto: ["Roboto","sans-serif"]
        },
        extend: {
            colors: {
                background: '#F5EBE0',
                hero: '#E3D5CA'
            }
        }
    },
    plugins: [],
}


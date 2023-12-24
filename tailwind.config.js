/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            'body': ["Playfair Display", "serif"]
        },
        extend: {
            colors: {
                one: '#EDEDE9',
                two: '#D6CCC2',
                three: '#F5EBE0',
                four: '#E3D5CA',
                five: '#D5BDAF',
            }
        }
    },
    plugins: [],
}


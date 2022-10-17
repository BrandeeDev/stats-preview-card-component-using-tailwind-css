/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {
            colors: {
                stats_blue: {
                    100: '#1B1937',
                    200: '#0A0C1C',

                },
                stats_violet: '#AB5CDB',
            },
            fontFamily:{
                'inter': ['Inter',' sans-serif'],
                'lexend-deca':['Lexend Deca',' sans-serif'],
            },
            backgroundImage:{
                meeting_mobile:'url("./images/image-header-mobile.jpg")',
                meeting_desktop:'url("./images/image-header-desktop.jpg")',

            }
        },
    },
    plugins: [],
}
;
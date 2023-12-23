/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                azul_cs: {
                    DEFAULT: "#00105d",
                    100: "#abb9ff",
                    200: "#5874ff",
                    300: "#042eff",
                    400: "#001daf",
                    500: "#00105d",
                    600: "#000c49",
                    700: "#000937",
                    800: "#000625",
                    900: "#000312",
                },
                amarelo_cs: {
                    DEFAULT: "#ffce47",
                    100: "#fff5da",
                    200: "#ffebb6",
                    300: "#ffe291",
                    400: "#ffd86c",
                    500: "#ffce47",
                    600: "#ffbd06",
                    700: "#c49000",
                    800: "#836000",
                    900: "#413000",
                },
            },
        },
    },
    plugins: [],
};

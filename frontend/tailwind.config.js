/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			default: ["Hammersmith One", "sans-serif"],
		},
		extend: {
			colors: {
				true_answer: "#5c91fa",
			},
		},
	},
	plugins: [],
};

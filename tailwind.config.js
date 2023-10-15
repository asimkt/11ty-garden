/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./_includes/**/*.{njk,md}",
		"./content/**/*.{njk,md}",
		"./_data/**/*.{njk,md}",
		"./src/**/*.svg",
	],
	theme: {
		extend: {},
	},
	plugins: [],
};

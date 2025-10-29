/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      font-size: {
        'course-details-heading-small':['26px', '36px'],
        'course-details-heading-large':['36px','44px'],
        'home-heading-samll' : ['28px','34px'],
        'home-heading-large' : ['48px','56px'],
        'defult' : ['15px','21px']
      },
    },
  },
  plugins: [],
}

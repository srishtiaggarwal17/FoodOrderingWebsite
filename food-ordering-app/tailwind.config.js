/** @type {import('tailwindcss').Config} */
export default { 
  darkMode: 'class', 
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'hero': "url('https://assets.cntraveller.in/photos/67ef8c553dcdf54c198920ba/master/w_1024%2Cc_limit/Lead%2520option%25201.jpg')",
        'hero2':"url('https://wallpapers.com/images/featured/food-photography-background-iyvy1e8yztvry3g8.jpg')"
      }
    },
    
  },
  plugins: [],
  prefix: 'tw-',
}

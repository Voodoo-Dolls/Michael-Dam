module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {

    extend: {
      minHeight:{
        'halfdh': '50dvh'
      },
      colors:{
        'primary':'#fcd34d',
        'primary2':"#fed863",
        'primary3':"#ffdc78",
        'primary4':"#ffdc78",
        'black':'#121212',
        'black2': "#282828",
        'black3': "#3f3f3f",
        'white': "#f1f1f1",
        "tone":"#262219",
        "tone2":"#3b372e",

      },
    },
    fontFamily: {
      "inter":"var(--font-inter)",
    },
    fontSize: {
      'body': '1.125rem',
      'hero': 'clamp(2.074rem, (5vw + 16px), 4rem)',
      'button': '1.5rem',
      'h1': '2.986rem',
      'h2': '2.488rem',
      'h3': '2.074rem',
      'h4': '1.728rem',
    },
    gridTemplateRows:{
      '0': '0fr',
      '1': '1fr'
    }
    
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes: []
  }
}
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
        'black':'#121212'
      },
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
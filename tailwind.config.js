
module.exports = {

  content: [ "./pages/**/*.{js,ts,jsx,tsx}",    
  "./components/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    // fontSize: {
    //   sm: '0.875rem',
    //   base: '1rem',
    //   xl: '1.25rem',
    //   '2xl': '1.563rem',
    //   process_index: '6.953rem',
    //   masthead_title: ['96px', {
    //   lineHeight: '109px',
    //   letterSpacing: '3px',
    //   }],
    // },
    colors: {
      'white': 'rgba(255,255,255, 1)',
       yellow: '#f99a45 ',
      'black': {
        light: 'rgba(0,0,0, 0.5)',
        DEFAULT: 'rgba(0,0,0, 0.8)',
        dark: 'rgba(0,0,0, 1)',
      },
      red: '#ef4444'
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1680px',
    },
    container: {
      center: true,
    },
    extend: {
      boxShadow: {
        'custom': '4px 4px 0px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}

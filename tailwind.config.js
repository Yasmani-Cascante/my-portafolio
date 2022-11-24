
module.exports = {
  darkMode: 'class',
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",    
  "./components/**/*.{js,ts,jsx,tsx}" ],
  theme: {
    colors: {
      white: {
        DEFAULT: 'rgba(255,255,255, 1)',
        dark: 'rgba(255,255,255, 0.8)',
        bg: '#efefef', 
      },
       yellow: '#f99a45 ',
      'black': {
        light: 'rgba(0,0,0, 0.5)',
        DEFAULT: 'rgba(0,0,0, 0.8)',
        dark: 'rgba(0,0,0, 1)',
        bg: '#222222'
      },
      red: '#ef4444',
      blue: {
        light: '#317BCD',
        DEFAULT: '#004DBA'
      },
      code: 'green',
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      // '2xl': '1680px',
      // '2xl': '1536px',
      '2xl': '1420px',
    },
    container: {
      center: true,
      maxWidth: {
        '1/2': '50%',
      }
    },
    extend: {
      boxShadow: {
        'custom': '4px 4px 0px rgba(0, 0, 0, 1)',
      }
    },
  },
  plugins: [],
}

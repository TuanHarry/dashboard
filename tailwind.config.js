module.exports = {
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#161C24',
          '50': '#5C7596',
          '100': '#546B89',
          '200': '#445770',
          '300': '#354357',
          '400': '#25303D',
          '500': '#161C24',
          '600': '#010101',
          '700': '#000000',
          '800': '#000000',
          '900': '#000000'
        }
      },
      truncate: {
        lines: {
          1: '1',
          2: '2',
        },
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      fontFamily: {
        // Font Montserrat
        'opensans-light': ['OpenSans-Light', 'Helvetica', 'Arial', 'sans-serif'],
        'opensans-bold': ['OpenSans-Bold', 'Helvetica', 'Arial', 'sans-serif'],
        'opensans-medium': ['OpenSans-Medium', 'Helvetica', 'Arial', 'sans-serif'],
        'opensans-regular': ['OpenSans-Regular', 'Helvetica', 'Arial', 'sans-serif'],
        'opensans-semibold': ['Montserrat-SemiBold', 'Helvetica', 'Arial', 'sans-serif'],

      },
      // opacity: ['disabled'],
      fontSize: {
        tiny: '0.625rem',
      },
      keyframes: {
        'fade-out-up': {
          'from': {
            opacity: '1',
            transform: 'translateY(0px)'
          },
          'to': {
            opacity: '0',
            transform: 'translateY(-24px)'
          },
        }
      },
      animation: {
        'fade-out-up': 'fade-out-up 2s ease-out'
      },

      width: {
        '22': '5.5rem',
        '46': '11.5rem',
      },

      zIndex: {
        '5': '5',
      },

      fontSize: {
        '8px': '0.5rem',
        '10px': '0.625rem',
      },

      borderRadius: {
        '2.5xl': '1.25rem',
      }
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
      textOpacity: ['active']
    }
  },
  plugins: [

  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    // enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/components/**/*.{js,vue}',
      './src/layouts/**/*.{js,vue}',
      './src/pages/**/*.{js,vue}',
      './src/plugins/**/*.{js,vue}',
      './src/mixins/*.{js,vue}',
      './src/mixins/**/*.{js,vue}',
      './src/modules/**/*.{js,vue}',
      './src/modules/**/**/*.{js,vue}',
      './nuxt.config.js',
    ],
    safelist: [
      'bg-blue-600',
      'bg-blue-400',
      'opacity-20',
      '-ml-5',
      'h-36'
    ],
    options: {
      // Set whitelist in nuxt.config.js -> purgeCSS.whitelist: ['dark-mode', 'light-mode', 'btn', 'icon']
    },
  },
}

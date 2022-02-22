const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false
  },
  theme: {
    fontFamily: {
      'sans' : ['Inter','sans-serif'],
      'serif' : ['Lora','serif'],
      'jost' : ['Jost','sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      animation: {
        wiggle: 'wiggle 3s ease-in-out infinite',
        bounce: 'bounce 2s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        }
        
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss, addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '80%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '860px',
          },
          '@screen xl': {
            maxWidth: '900px',
          },
        }
      }),

      addVariant('firefox', ({ container, separator }) => {
      const isFirefoxRule = postcss.atRule({
        name: '-moz-document',
        params: 'url-prefix()',
      });
  
      isFirefoxRule.append(container.nodes);
      container.append(isFirefoxRule);

      isFirefoxRule.walkRules((rule) => {
        rule.selector = `.${e(
        `firefox${separator}${rule.selector.slice(1)}`
        )}`;
      });
      });
    }),
  ],
}

/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    '*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'beige': '#FCF6F3',
        'white': '#FFFFFF',
        'black': '#000000',
        'fd-blue': '#2C90C2',
        'fd-dark-blue': '#38445E',
        'fd-light-blue': '#E8F4FA',
        'fd-orange': '#FF7342',
        'form-gray': '#EDEDED',
        'sustainable': '#91B520',
        'transparent': 'transparent',
        'gray': '#898989',
        'red': '#b00000',
        'wild-sand': '#F5F5F5',
        'provincial-pink': '#FDF6F3',
        'wild-sand-dark': '#F7F7F7',
        'weak-gray': '#E8E8E8'
      },
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      fontSize: {
        nav: ['16px', {
          letterSpacing: '0.01em',
          lineHeight: '38px',
        }],
        s: ['12px', '15px'],
        sbase: ['14px', {
          letterSpacing: '0.02em',
          lineHeight: '24px',
        }],
        base: ['20px', {
          letterSpacing: '0.02em',
          lineHeight: '38px',
        }],
        xbase: ['24px', {
          letterSpacing: '0.01em',
          lineHeight: '38px',
        }],
        normal: ['18px', {
          letterSpacing: '0.02em',
          lineHeight: '31px'
        }],
        l: ['25px', '32px'],
        sl: ['28px', '42px'],
        xl: ['35px', '54px'],
        xxl: ['44px', '62px'],
        xxxl: ['48px', '68px'],
        superxl: ['54px', '72px'],
      },
      width: {
        'sub-menu': '32rem',
      }
    },
  },
  plugins: [],
}

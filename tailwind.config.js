/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },
    container: {
      center: true
    },
    colors: {
      primary: 'rgb(245, 246, 250)',
      blue: 'rgb(72, 128, 255)',
      white: 'rgb(255, 255, 255)',
      grey1: 'rgb(224, 224, 224)',
      grey2: 'rgb(32, 34, 36)',
      grey3: 'rgb(181, 181, 181)',
      brown: 'rgb(64, 64, 64)',
      openBlue: 'rgb(0, 182, 155)',
      sales: 'rgb(249, 151, 138)',
      profit: 'rgb(227, 185, 255)',
      repeated: 'rgb(192, 210, 240)',
      openRed: 'rgb(249, 60, 101)',
      customBlue: 'rgb(72, 128, 255)',
      orange: 'rgb(255, 135, 67)',
      orange2: 'hsl(22, 100%, 73%)',
      anotherGray: 'rgb(226, 234, 248)',
      otherGray: 'rgb(249, 249, 249)',
      red: 'rgb(249, 60, 101)'
    },
    fontSize: {
      small: '14px',
      normal: '16px',
      large: '18px'
    },
    borderColor: {
      grey: 'rgb(213, 213, 213)',
      grey3: 'rgb(151, 151, 151)'
    },
    borderRadius: {
      custom: '0 4px 4px 0',
      that: '14px'
    },
    fontWeight: {
      small: '500',
      normal: "600",
      bold: '700',
      extraBold: '800'
    }
  },
  plugins: [],
}


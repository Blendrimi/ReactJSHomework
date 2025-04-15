/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'header-bg': '#1e1e1e',
        'logo-gray': '#ccc',
        'logo-orange': '#ff6d00',
        'discount-bg': '#ffe9e9',
        'discount-text': '#ff4d4f',
        'heart-default': '#000',
      },
      fontSize: {
        'product-title': '14px',
        'product-price': '16px',
        'old-price': '13px',
        'discount': '12px',
        'recommended': '24px',
      },
      spacing: {
        'header-x': '30px',
        'header-y': '10px',
        'logo-left': '34px',
        'recommended-pt': '36px',
        'recommended-pl': '64px',
        'product-padding': '12px',
        'product-gap': '12px',
      },
      borderRadius: {
        'product': '12px',
        'discount': '4px',
        'heart': '9999px',
        'search': '30px',
        'login-btn': '20px'
      },
      boxShadow: {
        'product': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'product-hover': '0 4px 12px rgba(0, 0, 0, 0.1)',
        'heart': '0 2px 5px rgba(0, 0, 0, 0.1)',
      },
      width: {
        'product-card': '280px',
        'header': '97%',
        'heart-icon': '32px'
      },
      height: {
        'heart-icon': '32px'
      },
      inset: {
        'heart-top': '251px',
        'heart-right': '12px',
        'top-0': '0',
        'left-0': '0'
      },
      zIndex: {
        'header': '1000',
        'heart': '1'
      }
    },
  },
  plugins: [],
} 

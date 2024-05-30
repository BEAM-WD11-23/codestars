/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/images/Hero.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },

      fontFamily: {
        FertigoPro: "FertigoPro",
      },

      screens: {
      'sm-phone': '320px',  // Small Phone
      'phone': '480px',     // Phone
      'sm-tablet': '768px', // Small Tablet
      'tablet': '1024px',   // Tablet
      'laptop': '1440px',   // Laptop
      'desktop': '1441px',  // Desktop
      },

      colors: {
        menuRed: "rgb(200,28,46)",
        navBg: "#041455;",
      },

      fontSize: {
        customFont: "6pt",
      },

      spacing: {
        Adrian: "300px",
      },
    },
  },
  plugins: [],
};

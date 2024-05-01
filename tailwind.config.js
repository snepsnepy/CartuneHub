module.exports = {
  plugins: [require("daisyui")],
  theme: {
    extend: {
      backgroundImage: {
        "jdm-background": "url('/public/img/background2.png')",
        "login-background": "url('/public/img/login_photo.png')",
      },
      colors: {
        primary: "#ffbd00",
        "primary-hover": "#F3DD99",
        "primary-content": "#ff5400",
        secondary: "#390099",
        "secondary-content": "#ff0054",
        "base-content": "#fff",
      },
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
      },
    },
  },
};

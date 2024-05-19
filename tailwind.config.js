module.exports = {
  plugins: [require("daisyui")],
  theme: {
    extend: {
      backgroundImage: {
        "jdm-background": "url('/public/img/background4.jpg')",
        "login-background": "url('/public/img/login_photo.png')",
      },
      colors: {
        primary: "#F5005D",
        "primary-hover": "#D30045",
        "primary-content": "#FFFFFF",
        neutral: "#574143",
        "neutral-content": "#BFA5A7",
        "base-content": "#F7F5DD",
        secondary: "#9BDEAC",
        error: "#E74242",
        success: "#6CC070",
      },
      fontFamily: {
        mukta: ["Mukta", "sans-serif"],
      },
    },
  },
};

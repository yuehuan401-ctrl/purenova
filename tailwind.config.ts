import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111318",
        graphite: "#3d4148",
        pearl: "#fbfbf8",
        mist: "#f2f4f2",
        line: "#e6e8e6",
        air: "#dcecf2"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(17, 19, 24, 0.08)",
        float: "0 32px 90px rgba(17, 19, 24, 0.16)"
      },
      fontFamily: {
        sans: ["Inter", "Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;

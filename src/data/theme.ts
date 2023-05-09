import { createTheme } from "@mui/material"

const theme = createTheme({
  palette: {
    // accent: {
    //   base: "",
    //   dark1: "",
    //   dark2: "",
    //   light1: "",
    //   light2: "",
    // },
    // danger: {
    //   base: "",
    //   dark1: "",
    //   dark2: "",
    //   light1: "",
    //   light2: "",
    // },
    // neutral: {
    //   white: "",
    //   neutral0: "",
    //   neutral10: "",
    //   neutral25: "",
    //   neutral50: "",
    //   neutral75: "",
    //   neutral100: "",
    // },
    primary: {
      main: "#FF6347",
      base: "#FF6347",
      light1: "#FF6347",
      light2: "#FF6347",
      light3: "#FF6347",
      light4: "#FF6347",
      dark1: "#FF6347",
      dark2: "#FF6347",
    },
  },

  typography: {
    button: {
      textTransform: "none",
    },
    displayLarge: {
      fontWeight: 500,
      fontSize: "57px",
      lineHeight: "64px",
    },
    displayMedium: {
      fontWeight: 500,
      fontSize: "45px",
      lineHeight: "52px",
    },
    displaySmall: {
      fontWeight: 500,
      fontSize: "36px",
      lineHeight: "44px",
    },
    headlineLarge: {
      fontWeight: 500,
      fontSize: "32px",
      lineHeight: "40px",
    },
    headlineMedium: {
      fontWeight: 400,
      fontSize: "28px",
      lineHeight: "36px",
    },
    headlineSmall: {
      fontWeight: 600,
      fontSize: "24px",
      lineHeight: "32px",
    },
    titleLarge: {
      fontWeight: 400,
      fontSize: "22px",
      lineHeight: "28px",
    },
    titleMedium: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.15px",
    },
    titleSmall: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    bodyLarge: {
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.5px",
    },
    bodyMedium: {
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.25px",
    },
    bodySmall: {
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.4px",
    },
    buttonLarge: {
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "24px",
      letterSpacing: "0.1px",
    },
    buttonMedium: {
      fontWeight: 500,
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.1px",
    },
    buttonSmall: {
      fontWeight: 500,
      fontSize: "12px",
      lineHeight: "16px",
      letterSpacing: "0.1px",
    },
  },
})

export default theme

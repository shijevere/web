import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#023047",      // deep-space-blue
      light: "#219ebc",     // blue-green
    },
    secondary: {
      main: "#ffb703",      // amber-flame
      light: "#8ecae6",     // sky-blue-light
      dark: "#fb8500",      // princeton-orange
    },
    error: {
      main: red.A400,
    },
    common: {
      white: "rgba(255, 255, 255, 1)",
    },
  },
  typography: {
    fontFamily: "Poppins-Regular",
  },
  
});

export default theme;

import { createTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#D8DEFF",
      light: "#EBEEFF",
      dark: "#332A7C",
    },
    secondary: {
      main: "#5AC070",
    },
    background: {
      default: "#F4F5F7",
      paper: "#F7F7F7",
    },
    text: {
      primary: "#353E6C",
      secondary: "#F7F7F7",
    },
    error: {
      main: "#DD586A",
    },
  },
  typography: {
    fontFamily: ["Poppins"].join(","),
    h1: {
      fontSize: "1.2rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.1rem",
      fontWeight: 600,
    },
    h4: {
      fontSize: "0.8rem",
      fontWeight: 400,
    },
    body1: {
      fontSize: "1rem",
      fontWeight: 600,
    },
    body2: {
      fontSize: "0.8rem",
      fontWeight: 500,
    },
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700,
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#332A7C",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#332A7C",
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          color: "#332A7C",
          fontWeight: 500,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#A5A6AD",
          fontWeight: 700,
          "&.Mui-focused": {
            color: "#332A7C",
          },
          "&.MuiFormLabel-filled": {
            color: "#332A7C",
          },
        },
      },
    },
  },
};

export const theme = createTheme(themeOptions);

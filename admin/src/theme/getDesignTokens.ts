import { PaletteMode } from "@mui/material"

const theme = {
  primary: "#231f20",
  secondary: "#ee1c25",
}

const { primary, secondary } = theme

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    background: {
      default: secondary,
    },
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
  },
  overrides: {
    DataGrid: {
        root:{
            border: 'none',
        }
    }
  }
})



/*

      ...(mode === "dark" && {
        main: primaryDark,
      }),


text: {
      ...(mode === "light"
        ? {
            primary: themePrimary,
            secondary: themeSecondary,
          }
        : {
            primary: themeSecondary,
            secondary: themePrimary,
          }),
    },
    */
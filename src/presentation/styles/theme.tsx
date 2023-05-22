import { createTheme } from '@mui/material'
declare module '@mui/material/styles' {
  interface PaletteOptions {
    neutral: PaletteOptions['primary']
    danger: PaletteOptions['primary']
    disabled: PaletteOptions['primary']
  }
  interface PaletteColorOptions {
    main: string
    light: string
    dark: string
    lighther?: string
  }
}

const theme = createTheme({
  palette: {
    secondary: {
      main: '#0086ff',
      dark: '#095DBD',
      light: '#33B1FF'
    },
    primary: {
      main: '#db3422',
      dark: '#C21E0C',
      light: '#F55240'
    },
    neutral: {
      main: '#B2B2B2',
      dark: '#C4C4C4',
      light: '#EDEDED'
    },
    danger: {
      main: '#FA6159',
      dark: '#E05851',
      light: '#F18F93',
      lighther: '#F5B7C1'
    },
    disabled: {
      main: '#D4D4D4',
      dark: '#666666',
      light: '#CCC'
    }
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
})

export default theme
"use client"
import '../globals.css'
import {ThemeProvider, CssBaseline, createTheme } from '@/app/lib/MuiSsr';

const theme = createTheme({
    palette: {
        primary : {
            main : '#fff',
        },
        text:{
          primary: "#333",
        }
      },
    typography: {
      fontFamily: 'inherit',
    },
    
  });
  
const MuiTheme = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline/>
      {children}
    </ThemeProvider>
  )
}

export default MuiTheme
import { CssBaseline, ThemeProvider } from "@mui/material"
import { purpleTheme } from "./purpleTheme"

export const AppTheme = ({ children }) => {
  return (
    
    <ThemeProvider theme={ purpleTheme }>
      {/* CsBaseLine Kickstart an elegant, consistent, and simple baseline */}
      <CssBaseline />

      { children }
    </ThemeProvider>
  )
}

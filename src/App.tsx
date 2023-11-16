import { ThemeProvider } from "styled-components"
import { theme } from './styles/Theme'
import AccountBox from "./components/AccountBox"
import { CenterChildElement, GlobalStyles } from "./styles/Global"


export default () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CenterChildElement>
        <AccountBox />
      </CenterChildElement>
    </ThemeProvider>
  )
}
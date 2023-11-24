import { ThemeProvider } from "styled-components"
import { theme } from './styles/Theme'
import { GlobalStyles } from "./styles/Global"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import AccountBox from "./views/AccountBox"
import Auth from "./pages/Auth"
import Home from "./pages/Home"

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />}>
            <Route index element={<AccountBox />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}


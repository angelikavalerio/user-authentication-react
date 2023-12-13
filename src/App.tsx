import { ThemeProvider } from "styled-components"
import { theme } from './styles/Theme'
import { GlobalStyles } from "./styles/Global"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import DialogBox from "./components/DialogBox"
import AccountBox from "./views/AccountBox"
import Auth from "./pages/Auth"
import Home from "./pages/Home"
import { useAppSelector } from "./app/hooks"
import { selectTriggerLoginAlert } from "./features/triggers/triggerSlice"




export default () => {
  const showDialogBox = useAppSelector(selectTriggerLoginAlert)
  const isLoggedIn = true
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          {showDialogBox ? <DialogBox isAlert={true} headerText="Oh no!" agreeButton="Go back to Login page">The token has expired. You need to login again.</DialogBox> : ''}
          <Routes>
            <Route path="/" element={<Auth />}>
              <Route index element={<AccountBox />} />
              <Route path="home" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}


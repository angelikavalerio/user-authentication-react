import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import App from './App'
import './styles/Global'
import { store } from './app/store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faEye)


const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<Provider store={store}><App /></Provider>)
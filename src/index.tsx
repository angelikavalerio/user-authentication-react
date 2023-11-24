import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/Global'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas, faEye } from '@fortawesome/free-solid-svg-icons'

library.add(fas, faEye)


const container = document.getElementById('app-root')!
const root = createRoot(container)
root.render(<App />)
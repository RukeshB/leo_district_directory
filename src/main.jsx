import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'
import { ThemeProvider } from '@material-tailwind/react'

render(
    <ThemeProvider>
        <App />
    </ThemeProvider>
    , document.getElementById('app'))

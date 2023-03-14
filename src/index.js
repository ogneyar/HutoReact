
import React from 'react'
import * as ReactDOM from 'react-dom'
import App from './App'

import './styles/index.css'


const container = document.getElementById('root')

const element =   
    <React.StrictMode>
        <App />
    </React.StrictMode>

ReactDOM
    .createRoot(container)
    .render(element)

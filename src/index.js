
import React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import './styles/index.css'
import App from './App'


const container = document.getElementById('root')

const element =   
    <React.StrictMode>        
        <BrowserRouter>
            <QueryParamProvider adapter={ReactRouter6Adapter}>
                <App />
            </QueryParamProvider>
        </BrowserRouter>
    </React.StrictMode>

ReactDOM
    .createRoot(container)
    .render(element)

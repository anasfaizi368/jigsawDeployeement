
import { createRoot } from 'react-dom/client'

import './index.css'
import RootRoutes from './Rout/routes'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
 
    <BrowserRouter>
        <RootRoutes/>
    </BrowserRouter>
 
)

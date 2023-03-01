import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { Stores } from './Components/Stores/Stores'
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={Stores}>


    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

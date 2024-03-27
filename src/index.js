import React from 'react'
import ReactDOM from 'react-dom/client'
import "./style/global.css"
import Rotas from './rotas'
import { CartProvider } from './contexts/cart-context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CartProvider>
  <Rotas />
</CartProvider>
);



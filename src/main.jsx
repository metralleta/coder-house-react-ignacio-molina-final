import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CartProvider from './context/CartContext.jsx'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyClktemutduqFnJvvFr5ThFdif1bPJ6S7Y',
    authDomain: 'react-coderhouse-452c0.firebaseapp.com',
    projectId: 'react-coderhouse-452c0',
    storageBucket: 'react-coderhouse-452c0.appspot.com',
    messagingSenderId: '443518062446',
    appId: '1:443518062446:web:f06ecc31d58241b51f3b7f',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <CartProvider>
                <App />
            </CartProvider>
        </BrowserRouter>
    </React.StrictMode>
)

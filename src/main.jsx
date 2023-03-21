// REACT
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// COMPONENTS
import App from './App'

// CSS
import './index.css'

// PÁGINAS
import Home from './routes/Home'
import NewPost from './routes/NewPost'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/new",
        element: <NewPost />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

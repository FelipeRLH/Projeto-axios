// REACT
import { Outlet } from 'react-router-dom'

// CSS
import './App.css'
import Navbar from './components/Navbar'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </div>
  )
}

export default App

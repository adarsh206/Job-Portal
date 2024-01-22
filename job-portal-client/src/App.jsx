import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Below from './components/Below'



function App() {


  return (
   <>
   <Navbar />
   <Outlet/>
  <Below/>
   </>
  )
}

export default App

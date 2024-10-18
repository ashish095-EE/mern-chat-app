
import './App.css'
import Login from './Pages/Login/login.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import Home from './Pages/Home/home.jsx'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from'react-hot-toast'

function App() {
  

  return (
  
    <div className='h-screen flex justify-center items-center p-4'>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/signup' element={<SignUp/> } />

      </Routes>
      <Toaster/>

      

      

    </div>
      
    
  )
}

export default App

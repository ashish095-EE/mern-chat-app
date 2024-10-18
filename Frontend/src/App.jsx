
import './App.css'
import Login from './Pages/Login/login.jsx'
import SignUp from './Pages/SignUp/signup.jsx'
import Home from './Pages/Home/home.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  

  return (
  
    <div className='h-screen flex justify-center items-center p-4'>
      <Routes>
        <Route path='/' element={<Home/> } />
        <Route path='/login' element={<Login/> } />
        <Route path='/signup' element={<SignUp/> } />

      </Routes>

      

      

    </div>
      
    
  )
}

export default App

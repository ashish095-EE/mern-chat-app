
import './App.css'
import Login from './Pages/Login/login.jsx'
import SignUp from './Pages/SignUp/SignUp.jsx'
import Home from './Pages/Home/home.jsx'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Toaster } from'react-hot-toast'
import { useAuthContext } from './Context/AuthContext.jsx'

function App() {

  const {authUser} = useAuthContext();
  

  return (
  
    <div className='h-screen flex justify-center items-center p-4'>
      <Routes>
        <Route path='/' element={authUser ? <Home/>: <Navigate to={"/login"} /> } />
        <Route path='/login' element={authUser ? <Navigate to='/' />:<Login/> } />
        <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp/> } />

      </Routes>
      <Toaster/>

      

      

    </div>
      
    
  )
}

export default App

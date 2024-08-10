import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { Routes,Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';

function App() {
  const [isAuth,setIsAuth]=useState(false)
  useEffect(()=>{
  const user=localStorage.getItem("Ctoken")
  if(user)setIsAuth(true)
  },[])
  return (
    <div className="w-full h-dvh">
      {!isAuth?(
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/signin' element={<Signin  setIsAuth={setIsAuth}/>}/>
        </Routes>
      ):<div className='w-full h-dvh bg-slate-200'>
        <Home/>
        </div>}
       
    </div>
  );
}

export default App;

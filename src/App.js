import './App.css';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { Routes,Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [isAuth,setIsAuth]=useState(false)
  return (
    <div className="w-full h-dvh">
      {!isAuth?(
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/signin' element={<Signin  setIsAuth={setIsAuth}/>}/>
        </Routes>
      ):""}
       
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import { Login, Register, Files, TopBar } from './components'
import './App.css';
import React from 'react';
const App = () => {
  const [isLogin, setIsLogin] = React.useState<boolean>(localStorage.getItem('token') ? true : false)
  const [userId, setUserId] = React.useState<string | null>(localStorage.getItem('localId') ? localStorage.getItem('localId') : 'false')

  return (
    <div data-testid="app-root">
      <TopBar isLogin={isLogin} setIsLogin={setIsLogin}/>
      <div className="container">
      <Routes>
        {isLogin && <Route path="/" element={<Files userId={userId}  />} />}
        {!isLogin && <Route path="/" element={<Login  setIsLogin={setIsLogin} setUserId={setUserId} />} />}
        {!isLogin && <Route path="/register" element={<Register  setIsLogin={setIsLogin} setUserId={setUserId} />} />}
      </Routes>
      </div>

    </div>
  );
}

export default App;

import {  Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/Home';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useState } from 'react';
import { TextField } from '@mui/material';



function App() {
  const secretKey = import.meta.env.VITE_REACT_APP_SECRET_KEY;
  const [loggedIn, setLoggedIn] = useState<boolean>(false)
  const location = "https://maps.google.com/maps?rlz=1C1ONGR_enIN1089IN1089&gs_lcrp=EgZjaHJvbWUqEwgBEC4YrwEYxwEYgAQYmAUYmgUyCggAEAAY4wIYgAQyEwgBEC4YrwEYxwEYgAQYmAUYmgUyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDM3NTlqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kd2-PHc1lcI7MbBXNDJbpBZ5&daddr=Gorhe+Budruk,+Khiridwasti,+off+Sinhgad+Road,+Girinagar,+Maharashtra+411025"
  const navigate = useNavigate()
  const [enteredKey, setEnteredKey] = useState("")

  const handleSecretKeyEnter = (value: string) => {
    setEnteredKey(value)
  }

  return (
    !loggedIn ? <div className='justify-content-center d-flex flex-column align-items-center bg-dark' style={{
      height: "100vh"
    }}>
      <TextField className='mb-2 bg-white rounded' onChange={(event) => handleSecretKeyEnter(event.target.value)} placeholder="Enter your phone number"/>
      <button type='button' className='btn btn-primary mt-2' onClick={() => {
        console.log(secretKey, enteredKey)
        if (secretKey === enteredKey){
          setLoggedIn(true)
        }
      }}>Login</button>
    </div>:<div>
      <nav className="navbar bg-dark">
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand text-white fs-2" style={{
            cursor: "pointer"
          }} onClick={() => navigate('/')}>Kruti Wedding</a>
          <div className="d-flex">
          <Fab variant="extended" onClick={() => {
             window.location.href = location
            }}>
            <NavigationIcon sx={{ mr: 1 }} />
            Navigate
          </Fab>
            
          </div>
        </div>
      </nav>
      <Home/>
    </div>
  );
}

export default App

import {  Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/Home';
import EventDetails from './pages/EventDetails/EventDetails';



function App() {
  const location = "https://maps.google.com/maps?rlz=1C1ONGR_enIN1089IN1089&gs_lcrp=EgZjaHJvbWUqEwgBEC4YrwEYxwEYgAQYmAUYmgUyCggAEAAY4wIYgAQyEwgBEC4YrwEYxwEYgAQYmAUYmgUyBggCEEUYOTIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABNIBCDM3NTlqMGo3qAIAsAIA&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=Kd2-PHc1lcI7MbBXNDJbpBZ5&daddr=Gorhe+Budruk,+Khiridwasti,+off+Sinhgad+Road,+Girinagar,+Maharashtra+411025"
  const navigate = useNavigate()
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid justify-content-between">
          <a className="navbar-brand text-white" onClick={() => navigate('/')}>Kruti Wedding</a>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-danger me-2"
              onClick={() => {
                window.location.href = location
              }}
            >
              Venue
            </button>
            <button
              type="button"
              className="btn btn-danger ms-2"
              onClick={() => {
                navigate("/event-details");
              }}
            >
              Event
            </button>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-details" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App

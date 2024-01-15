import {  Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/Home';
import VenueDetails from './pages/VenueDetails/VenueDetails';
import EventDetails from './pages/EventDetails/EventDetails';

function App() {
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
                navigate("/venue-details");
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
        <Route path="/venue-details" element={<VenueDetails />} />
        <Route path="/event-details" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App

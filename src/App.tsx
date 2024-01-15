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
      Welcome to Kruti's Wedding
      
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            navigate("/venue-details");
          }}
        >
          Venue
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            navigate("/event-details");
          }}
        >
          Event
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/venue-details" element={<VenueDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
        </Routes>
    </div>
  );
}

export default App

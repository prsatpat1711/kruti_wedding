import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './pages/Home/Home';
import VenueDetails from './pages/VenueDetails/VenueDetails';
import EventDetails from './pages/EventDetails/EventDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/venue-details' element={<VenueDetails/>}/>
          <Route path='/event-details' element={<EventDetails/>}/>          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

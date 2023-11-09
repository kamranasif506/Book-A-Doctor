import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import LoginPage from './components/auth/login';
import Home from './components/home';
import './App.css';
import Navigation from './components/navigation';
import PrivateRoute from './components/auth/PrivateRoute';
import Register from './components/auth/register';
import DoctorDetail from './components/doctorDetail';
import ReservationList from './components/reservations';
import Appointment from './components/appointment/Appointment';
import NavAppointment from './components/appointment/NavAppointment';
import AddDoctor from './components/addDoctor/AddDoctor';
import DeleteDoctorPage from './components/deleteDoctor';

function App() {
  const isAuthed = true;

  return (
    <Router>
      {isAuthed && <Navigation />}
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/reserve" element={<NavAppointment />} />
          <Route path="/doctors">
            <Route exact path="/doctors/:docId/reservation" element={<Appointment />} />
            <Route
              path="/doctors/:docId"
              element={<DoctorDetail />}
            />
            <Route exact path="/doctors" element={<Home />} />
          </Route>
          <Route path="/reservations" element={<ReservationList />} />
        </Route>

        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/addDoctor" element={<AddDoctor />} />
        <Route path="/delete" element={<DeleteDoctorPage />} />
      </Routes>
    </Router>
  );
}

export default App;

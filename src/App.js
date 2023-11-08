import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import store from './redux/store';
import LoginPage from './components/auth/login';
import Home from './components/home';
import './App.css';
import Navigation from './components/navigation';
import PrivateRoute from './components/auth/PrivateRoute';
import Register from './components/auth/register';
import DoctorDetail from './components/doctorDetail';
import Appointment from './components/appointment/Appointment';
import NavAppointment from './components/appointment/NavAppointment';
import { getDoctors } from './redux/doctors/doctorSlice';
import AddDoctor from './components/addDoctor/AddDoctor';
import DeleteDoctorPage from './components/deleteDoctor';
import { getSpecialization } from './redux/specialization/specializationSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors());
    dispatch(getSpecialization());
  }, []);
  const isAuthed = true;
  // const isAuthed = useSelector((state) => state.auth.token !== null);
  return (
    <Provider store={store}>
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
              <Route path="/doctors/delete" element={<DeleteDoctorPage />} />
              <Route path="/doctors/add" element={<AddDoctor />} />
              <Route exact path="/doctors" element={<Home />} />
            </Route>
          </Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/addDoctor" element={<AddDoctor />} />
        </Routes>
      </Router>
    </Provider>
  );
}
export default App;

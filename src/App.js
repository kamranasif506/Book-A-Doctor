import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { getDoctors } from './redux/doctors/doctorSlice';
import AddDoctor from './components/addDoctor/AddDoctor';
// import { getSpecialization } from './redux/specialization/specializationSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDoctors());
    // dispatch(getSpecialization());
  }, [dispatch]);
  const { isLoading } = useSelector((store) => store.doctor);

  const isAuthed = true;
  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  if (!isLoading) {
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
        </Routes>
      </Router>
    );
  }
}

// const isAuthed = useSelector((state) => state.auth.token !== null);
//   return (
//     <Router>
//       {isAuthed && <Navigation />}
//       <Routes>
//         <Route exact path="/" element={<PrivateRoute />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/reserve" element={<NavAppointment />} />
//           <Route path="/doctors">
//             <Route exact path="/doctors/:docId/reservation" element={<Appointment />} />
//             <Route
//               path="/doctors/:docId"
//               element={<DoctorDetail />}
//             />
//             <Route exact path="/doctors" element={<Home />} />
//           </Route>
//         </Route>
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/addDoctor" element={<AddDoctor />} />
//       </Routes>
//     </Router>
//   );
// }
export default App;

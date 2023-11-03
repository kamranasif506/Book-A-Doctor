import React from 'react';
import { Provider } from 'react-redux';
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
import ReservationList from './components/reservations';
import Appointment from './components/appointment/Appointment';

function App() {
  const isAuthed = true;
  // const isAuthed = useSelector((state) => state.auth.token !== null);
  return (
    <Provider store={store}>
      <Router>
        {isAuthed && <Navigation />}
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/doctors">
              <Route path="/doctors/:docId/reservation" element={<Appointment />} />
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
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

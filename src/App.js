import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import store from './redux/store';
import LoginPage from './components/login';
import Home from './components/home';
import './App.css';
import Navigation from './components/navigation';
import PrivateRoute from './components/auth/PrivateRoute';
import Register from './components/register';

function App() {
  const isAuthed = true;

  return (
    <Provider store={store}>
      <Router>
        {isAuthed && <Navigation />}
        <Routes>
          <Route exact path='/' exact element={<PrivateRoute />}>
            <Route path='/' element={<Home />} />
            <Route path='/doctors' element={<Home />} />
          </Route>
          <Route path='/login' element={<LoginPage />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

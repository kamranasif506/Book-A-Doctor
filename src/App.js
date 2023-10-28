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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

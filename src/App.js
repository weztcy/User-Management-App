import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from './components/Navbar';
import Home from './pages/Home';
import Users from './pages/Users';
import { UserProvider } from './context/UserContext';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <UserProvider>
        <Router>
          <div className="App bg-dark" style={{ minHeight: '100vh' }}> {/* Tambahkan style 'minHeight: 100vh' di sini */}
            <Navigation />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </Router>
      </UserProvider>
    </Provider>
  );
};

export default App;

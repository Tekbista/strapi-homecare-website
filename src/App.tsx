import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './components/main/main';
import Home from './pages/home-page';
import About from './pages/about-page';
import ServicePage from './pages/service-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="service" element={<ServicePage /> } />
          <Route path="*" element={<h1>404 Not Found</h1>} /> {/* Catch-all route for undefined paths */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

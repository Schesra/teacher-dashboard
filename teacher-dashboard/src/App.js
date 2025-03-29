import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProfileView from './pages/profile/ProfileView';
import ProfileEdit from './pages/profile/ProfileEdit';

function App() {
  return (
    <Router>
      <Routes>
        {/* Trang đăng nhập */}
        <Route path="/" element={<Login />} />

        {/* Trang chính */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Hồ sơ */}
        <Route path="/profile/view" element={<ProfileView />} />
        <Route path="/profile/edit" element={<ProfileEdit />} />
      </Routes>
    </Router>
  );
}

export default App;

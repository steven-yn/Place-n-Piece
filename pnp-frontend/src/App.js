import React from 'react';
import { Route, Routes } from '../node_modules/react-router-dom/index';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import MapPage from './pages/MapPage';
import NoticePage from './pages/NoticePage';
import PlacePage from './pages/PlacePage';
import PiecePage from './pages/PiecePage';
import ProfilePage from './pages/ProfilePage';
import WritePage from './pages/WritePage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/map/*" element={<MapPage />} />
      <Route path="/notice/*" element={<NoticePage />} />
      <Route path="/place/*" element={<PlacePage />} />
      <Route path="/@:username/:pieceId" element={<PiecePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/write" element={<WritePage />} />
    </Routes>
  );
};

export default App;

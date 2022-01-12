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
import PieceListPage from './pages/PieceListPage';
import RegisterPage from './pages/RegisterPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/admin" element={<AdminPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/map" element={<MapPage />} />
      <Route path="/:noticeId/*" element={<NoticePage />} />
      <Route path="/:placeId/*" element={<PlacePage />} />
      <Route path="/:placeId/@:username/*" element={<PieceListPage />} />
      <Route path="/:placeId/@:username/:pieceId/*" element={<PiecePage />} />
      <Route path="/:placeId/@:username/write" element={<WritePage />} />
      <Route path="/@:username/profile" element={<ProfilePage />} />
    </Routes>
  );
};

export default App;

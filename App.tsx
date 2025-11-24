import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Review } from './pages/Review';
import { Register } from './pages/Register';
import { Promos } from './pages/Promos';
import { Games } from './pages/Games';
import { Lottery } from './pages/Lottery';
import { PageRoute } from './types';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path={PageRoute.HOME} element={<Home />} />
          <Route path={PageRoute.REVIEW} element={<Review />} />
          <Route path={PageRoute.REGISTER} element={<Register />} />
          <Route path={PageRoute.PROMOS} element={<Promos />} />
          <Route path={PageRoute.GAMES} element={<Games />} />
          <Route path={PageRoute.LOTTERY} element={<Lottery />} />
          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to={PageRoute.HOME} replace />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
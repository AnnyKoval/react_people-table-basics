import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainNav } from './components/MainNav';
import { HomePage } from './components/HomePage';
import { PeoplePage } from './components/PeoplePage';
import { PageNotFound } from './components/PageNotFound';

export const App = () => (
  <div data-cy="app">
    <MainNav />

    <main className="section">
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="people">
            <Route index element={<PeoplePage />} />
            <Route path=":selectedSlug" element={<PeoplePage />} />
          </Route>
          <Route
            path="*"
            element={<PageNotFound />}
          />
        </Routes>
      </div>
    </main>
  </div>
);

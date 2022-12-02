import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './Header/Header';
import Spinner from './Spinner/Spinner';

import 'react-toastify/dist/ReactToastify.css';
import 'modern-normalize/modern-normalize.css';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <ToastContainer autoClose={2500} hideProgressBar />
    </div>
  );
};

export default App;

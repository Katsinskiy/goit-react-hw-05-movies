import { Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import { Cast, OneMovieDetails, Reviews, Spinner } from 'components';
import { useEffect, useState } from 'react';
import { getMovieDetails } from '../../services/movieApi';
import { useLocation } from 'react-router-dom';

import s from './MovieDetailsPage.module.css';

function MovieDetailsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(() => {
    const fetchMoviesByID = async () => {
      setIsLoading(true);
      try {

        const data = await getMovieDetails(movieId);
        
        setMovie(data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesByID();
  }, [movieId]);

  const from = location.state?.from || '/';
  const goBack = () => navigate(from);

  const isMovie = Object.keys(movie).length > 0;

  return (
    <>
      {isLoading && <Spinner />}
      {isMovie && (
        <>
          <button className={s.btn} type="button" onClick={goBack}>
            Go Back
          </button>
          <OneMovieDetails {...movie} />
          <ul>
            <Link className={s.link} state={{ from }} to={'cast'}>
              Cast
            </Link>

            <Link className={s.link} state={{ from }} to={'reviews'}>
              Reviews
            </Link>
          </ul>
        </>
      )}

      <Routes>
        <Route path={'cast'} element={<Cast />} />
        <Route path={'reviews'} element={<Reviews />} />
      </Routes>
    </>
  );
}

export default MovieDetailsPage;

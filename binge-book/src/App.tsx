import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
/* Pages */
import HomePage from 'Pages/HomePage/HomePage';
import MoviesPage from 'Pages/MoviesPage/MoviesPage';
import SeriesPage from 'Pages/SeriesPage/SeriesPage';
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';
/* Zustand */
import { useAppStore } from 'App.store';


function App() {
  const setActiveEndpoint = useAppStore((state) => state.setActiveEndpoint);

  /* Set the current location endpoint */
  const location = useLocation()
  useEffect(() => {
    setActiveEndpoint(window.location.pathname);
  }, [location])


  return (
    <div>
      <p>Hello World!</p>

      <Routes>
        <Route path={FRONTEND_ENDPOINTS.HOMEPAGE} element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={FRONTEND_ENDPOINTS.MOVIES} element={<MoviesPage />} />
          <Route path={FRONTEND_ENDPOINTS.SERIES} element={<SeriesPage />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>  
  );
}


function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to={FRONTEND_ENDPOINTS.HOMEPAGE}>Home</Link>
            <Link to={FRONTEND_ENDPOINTS.MOVIES}>Movies</Link>
            <Link to={FRONTEND_ENDPOINTS.SERIES}>Series</Link>
          </li>
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}



export default App;

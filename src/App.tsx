import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './website/Layout/Layout';
import Home from './website/Home/Home';
import Downloads from './website/Downloads/Downloads';
import WikiPage from './website/Wiki/WikiPage';
import NotFound from './website/NotFound/NotFound';

import './App.css';

/**
 * Application root: installs the router and global styles, and mounts every page
 * under the shared {@link Layout}. The wiki is reachable both at `/wiki` (its
 * main page) and `/wiki/:slug` (any article). Must be rendered exactly once.
 *
 * @returns The routed application tree.
 */
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Layout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path='downloads'
            element={<Downloads />}
          />
          <Route
            path='wiki'
            element={<WikiPage />}
          />
          <Route
            path='wiki/:slug'
            element={<WikiPage />}
          />
          <Route
            path='*'
            element={<NotFound />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

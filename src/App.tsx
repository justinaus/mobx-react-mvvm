import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import PostsPage from './pages/PostsPage';
import PhotosPage from './pages/PhotosPage';
import { RoutePath } from './utils/enums';
import { PostsProvider } from './providers/PostsProvider';
import Header from './views/shared/Header';
import { PhotosProvider } from './providers/PhotosProvider';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={RoutePath.Posts}>
          <PostsProvider>
            <PostsPage />
          </PostsProvider>
        </Route>
        <Route path={RoutePath.Photos}>
          <PhotosProvider>
            <PhotosPage />
          </PhotosProvider>
        </Route>
        <Redirect to={RoutePath.Posts} />
      </Switch>
    </Router>
  );
}

export default App;

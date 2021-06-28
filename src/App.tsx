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

function App() {
  return (
    <Router>
      <Switch>
        <Route path={RoutePath.Posts}>
          <PostsPage />
        </Route>
        <Route path={RoutePath.Photos}>
          <PhotosPage />
        </Route>
        <Redirect to={RoutePath.Posts} />
      </Switch>
    </Router>
  );
}

export default App;

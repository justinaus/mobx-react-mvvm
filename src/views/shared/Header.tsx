import React from 'react';
import { Link } from 'react-router-dom';
import { RoutePath } from '../../utils/enums';

export default function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link to={RoutePath.Posts}>Posts</Link>
        </li>
        <li>
          <Link to={RoutePath.Photos}>Photos</Link>
        </li>
      </ul>
    </header>
  );
}

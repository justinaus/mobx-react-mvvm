import React from 'react';
import ListViewController from '../viewControllers/posts/ListViewController';
import UserInfoViewController from '../viewControllers/posts/UserInfoViewController';

export default function PostsPage() {
  return (
    <div>
      <UserInfoViewController />
      <ListViewController />
    </div>
  );
}

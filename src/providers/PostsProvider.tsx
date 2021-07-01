import React, { createContext, useContext, ReactNode } from 'react';
import PostsViewModel from '../viewModels/PostsViewModel';
import UserViewModel from '../viewModels/UserViewModel';

const viewModels = {
  postsViewModel: new PostsViewModel(),
  userViewModel: new UserViewModel(),
};

const context = createContext(viewModels);

export function PostsProvider({ children }: { children: ReactNode }) {
  return <context.Provider value={viewModels}>{children}</context.Provider>;
}

export const usePostsViewModels = () => useContext(context);

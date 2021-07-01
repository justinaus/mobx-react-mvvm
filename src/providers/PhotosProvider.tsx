import React, { createContext, useContext, ReactNode } from 'react';
import PhotosViewModel from '../viewModels/PhotosViewModel';

const viewModels = {
  photosViewModel: new PhotosViewModel(),
};

const context = createContext(viewModels);

export function PhotosProvider({ children }: { children: ReactNode }) {
  return <context.Provider value={viewModels}>{children}</context.Provider>;
}

export const usePhotosViewModels = () => useContext(context);

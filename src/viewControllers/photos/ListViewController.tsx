import { observer } from 'mobx-react';
import React from 'react';
import { useEffect } from 'react';
import { usePhotosViewModels } from '../../providers/PhotosProvider';
import List from '../../views/shared/List';

function ListViewController() {
  const { photosViewModel } = usePhotosViewModels();

  useEffect(() => {
    photosViewModel.getList();
  }, [photosViewModel]);

  return <List datas={photosViewModel.list} />;
}

export default observer(ListViewController);

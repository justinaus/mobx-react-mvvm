import { observer } from 'mobx-react';
import React from 'react';
import { useEffect } from 'react';
import { usePostsViewModels } from '../../providers/PostsProvider';
import List from '../../views/shared/List';

function ListViewController() {
  const { postsViewModel } = usePostsViewModels();

  useEffect(() => {
    postsViewModel.getList();
  }, [postsViewModel]);

  return <List datas={postsViewModel.list} />;
}

export default observer(ListViewController);

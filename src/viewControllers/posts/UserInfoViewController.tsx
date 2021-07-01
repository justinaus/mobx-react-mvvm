import { observer } from 'mobx-react';
import React from 'react';
import { usePostsViewModels } from '../../providers/PostsProvider';
import UserInfo from '../../views/posts/UserInfo';

function UserInfoViewController() {
  const { userViewModel } = usePostsViewModels();

  return (
    <UserInfo name={userViewModel.userName} email={userViewModel.userEmail} />
  );
}

export default observer(UserInfoViewController);

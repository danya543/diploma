import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { fetchUser } from '~/api/fetchUser';
import { userSlice } from '~/features/states/userSlice/userSlice';
import { LocalStorageKey } from '~/pages/constants/constants';
import { useAppDispatch } from '~/store/store.types';

import userStyles from './UserPanel.module.scss';

export const UserPanel = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [avatar, setAvatar] = useState<string>('');
  const accessToken = localStorage.getItem(LocalStorageKey.accessToken);
  const logOut = () => {
    dispatch(userSlice.actions.logout());
  };
  fetchUser()
    .then((data) => {
      setAvatar(data.user.avatar);
    })
    .catch((error) => console.error(error));
  return (
    <>
      <div
        className={userStyles.container}
        id={'userAvatar'}
        onClick={() => {
          accessToken && logOut();
          navigate('/sign/in');
        }}
      >
        <img src={avatar} />
        <span>Log out</span>
      </div>
    </>
  );
};

import { useNavigate } from 'react-router-dom';

import { ReactComponent as BurgerIcon } from '~/assets/icons/user.svg';
import { userSlice } from '~/features/states/userSlice/userSlice';
import { Button } from '~/shared/ui/Button/Button';
import { useAppDispatch } from '~/store/store.types';

import userStyles from './UserPanel.module.scss';

export const UserPanel = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const accessToken = localStorage.getItem('@pixema/access-token');
  const logOut = () => {
    dispatch(userSlice.actions.logout());
  };

  return (
    <div
      className={userStyles.container}
      onClick={() => {
        accessToken && logOut();
        navigate('/sign/in');
      }}
    >
      <Button iconLeft={<BurgerIcon />} />
      {accessToken ? <span>Log out</span> : <span>Sign in</span>}
    </div>
  );
};

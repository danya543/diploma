import { useNavigate } from 'react-router-dom';

import { ReactComponent as BurgerIcon } from '~/assets/icons/user.svg';
import { Button } from '~/shared/ui/Button/Button';

import userStyles from './UserPanel.module.scss';

export const UserPanel = () => {
  const navigate = useNavigate();

  return (
    <div
      className={userStyles.container}
      onClick={() => navigate('/sign/in')}
    >
      <Button iconLeft={<BurgerIcon />} />
      <select
        name=""
        id=""
        disabled
      >
        <option value="">Sign In</option>
        <option value="">Sign Up</option>
      </select>
    </div>
  );
};

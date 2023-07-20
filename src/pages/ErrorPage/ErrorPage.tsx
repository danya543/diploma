import { useNavigate } from 'react-router-dom';

import { ReactComponent as Error } from '~/assets/icons/404.svg';
import { ReactComponent as LeftArrow } from '~/assets/icons/IconChevronLeftPag.svg';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';

import errorStyles from './Error.module.scss';
export const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className={errorStyles.container}>
      <Button
        text={'Home'}
        iconLeft={<LeftArrow />}
        appearance={ButtonAppearance.Secondary}
        onClick={() => navigate('/')}
      />
      <Error />
    </div>
  );
};

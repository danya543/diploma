//import { ReactComponent as CloseIcon } from '~/assets/icons/times.svg';

import { ReactComponent as BurgerIcon } from '~/assets/icons/burger.svg';
import { Button } from '~/shared/ui/Button/Button';

export const MenuButton = ({
  //isOpen,
  onClick
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <Button
      onClick={onClick}
      iconLeft={<BurgerIcon />} //{isOpen ? <CloseIcon /> : <BurgerIcon />}
    />
  );
};

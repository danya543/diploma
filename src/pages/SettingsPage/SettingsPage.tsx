import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as SwitchOff } from '~/assets/icons/SwitchOff.svg';
import { ReactComponent as SwitchOn } from '~/assets/icons/SwitchOn.svg';
import { AppTheme } from '~/features/states/themeSlice/theme.constants';
import { switchTheme } from '~/features/states/themeSlice/themeSlice';
import { Button } from '~/shared/ui/Button/Button';
import { ButtonAppearance } from '~/shared/ui/Button/Button.types';
import { type RootState } from '~/store/store';

import SettingsStyle from './SettingsPage.module.scss';

export const SettingsPage = () => {
  const theme = useSelector((state: RootState) => state.switchTheme.appearance);
  const dispatch = useDispatch();

  return (
    <div className={SettingsStyle.container}>
      <h2>Theme switcher</h2>
      <div className={SettingsStyle.themeContainer}>
        <div className={SettingsStyle.theme}>
          <span>Use dark theme</span>
        </div>
        <div className={SettingsStyle.switcher}>
          <Button
            appearance={ButtonAppearance.Switcher}
            iconLeft={theme === AppTheme.dark ? <SwitchOff /> : <SwitchOn />}
            onClick={() => {
              theme === AppTheme.dark
                ? dispatch(switchTheme(AppTheme.light))
                : dispatch(switchTheme(AppTheme.dark));
            }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

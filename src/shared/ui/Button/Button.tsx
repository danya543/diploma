import { type ButtonHTMLAttributes, type ReactElement } from 'react';

import classNames from 'classnames';

import {
  ButtonAppearance,
  type ButtonAppearances
} from '~/shared/ui/Button/Button.types';

import buttonStyle from './Button.module.scss';

export const Button = ({
  text = null,
  appearance = ButtonAppearance.Primary,
  iconLeft = null,
  iconRight = null,
  ...passThroughProperties
}: {
  text?: string | number | null;
  appearance?: ButtonAppearances;
  iconLeft?: ReactElement | null;
  iconRight?: ReactElement | null;
  shouldFitContainer?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      {...passThroughProperties}
      className={classNames({
        [buttonStyle.button]: true,
        [buttonStyle[appearance]]: true
      })}
    >
      {iconLeft && <div className={buttonStyle.icon}>{iconLeft}</div>}
      {text}
      {iconRight && <div className={buttonStyle.icon}>{iconRight}</div>}
    </button>
  );
};

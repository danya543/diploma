import { type PropsWithChildren } from 'react';

import classNames from 'classnames';

import {
  ButtonAppearance,
  type ButtonProperties
} from '~/shared/ui/Button/Button.types';

import buttonStyles from './Button.module.scss';

export const Button = ({
  iconLeft = null,
  iconRight = null,
  appearance = ButtonAppearance.Primary,
  shouldFitContainer,
  children,
  ...passThroughProperties
}: PropsWithChildren<ButtonProperties>) => {
  return (
    <button
      {...passThroughProperties}
      className={`${passThroughProperties.className || ''} ${classNames({
        [buttonStyles.btn]: true,
        [buttonStyles[appearance]]: true
      })}`}
      style={{
        ...passThroughProperties.style,
        width: shouldFitContainer ? '100%' : passThroughProperties.style?.width
      }}
    >
      {iconLeft && <div className={buttonStyles.icon}>{iconLeft}</div>}
      {children}
      {iconRight && <div className={buttonStyles.icon}>{iconRight}</div>}
    </button>
  );
};

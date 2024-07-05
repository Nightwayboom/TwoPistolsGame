import type { ButtonHTMLAttributes, FC } from 'react';
import React from 'react';
import './Button.css';

export enum ThemeButton {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  DANGER = 'danger',
}

type ButtonProps = {
  theme?: ThemeButton;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = (props) => {
  const { theme, children, ...otherProps } = props;
  return (
    <button className={`Button ${theme}`} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;

import React from 'react';
import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra
} from '@chakra-ui/react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonPropsChakra {
  children?: React.ReactNode;
  label: string;
  className?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  size?: 'default' | 'autoSize' | 'large' | 'medium' | 'small' | 'extraSmall';
  variant?: 'colorDefault' | 'success' | 'white' | 'noBorder' | 'muted';
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ButtonBase = (
  {
    children,
    label,
    onClick,
    className = '',
    variant = 'colorDefault',
    size = 'default',
    ...props
  }: ButtonProps,
  ref
) => (
  <ButtonChakra
    size={size}
    w={{ xs: '100%', md: '0%' }} // md = 0% let button get minwidth of size button
    onClick={onClick}
    variant={variant}
    borderRadius="none"
    className={[styles['main-button'], className].join(' ')}
    ref={ref}
    {...props}
  >
    {label}
    {children}
  </ButtonChakra>
);

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ButtonBase
);

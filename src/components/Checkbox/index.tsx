import React from 'react';
import { Checkbox as CheckboxChakra } from '@chakra-ui/react';

interface Checkbox {
  className?: string;
  defaultIsChecked?: boolean;
  label?: string;
  isDisabled?: boolean;
  size?: 'default' | 'small' | 'large';
  value?: number | string;
  variant?: 'primary' | 'secondary';
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export const Checkbox = ({
  label,
  defaultIsChecked,
  isDisabled,
  size = 'default',
  value = '',
  className = '',
  variant = 'primary',
  onChange,
  ...props
}: Checkbox) => (
  <CheckboxChakra
    variant={variant}
    defaultChecked={defaultIsChecked}
    isDisabled={isDisabled}
    size={size}
    value={value}
    className={className}
    onChange={onChange}
    {...props}
  >
    {label}
  </CheckboxChakra>
);

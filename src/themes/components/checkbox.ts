export const Checkbox = {
  sizes: {
    default: {
      control: { w: '24px', h: '24px' },
      label: { fontSize: '16px' },
      icon: { fontSize: '12px' }
    },
    small: {
      control: { w: '20px', h: '20px' },
      label: { fontSize: '14px' },
      icon: { fontSize: '8px' }
    },
    large: {
      control: { w: '28px', h: '28px' },
      label: { fontSize: '18px' },
      icon: { fontSize: '16px' },
      bg: 'default.dark'
    }
  },

  baseStyle: {
    control: {
      border: '1px',
      borderRadius: '1px',
      _focus: 'xs',
      _checked: {
        _hover: {
          opacity: 0.8
        }
      }
    }
  },

  variants: {
    primary: {
      control: {
        borderColor: 'default.dark',
        _checked: {
          bg: 'default.dark',
          borderColor: 'default.dark',
          color: 'default.light',
          _hover: {
            bg: 'default.dark',
            borderColor: 'default.dark'
          }
        }
      }
    },

    secondary: {
      control: {
        borderColor: 'default.lightDark',
        _checked: {
          bg: 'primary.100',
          borderColor: 'primary.100',
          color: 'default.light',
          _hover: {
            bg: 'primary.100',
            borderColor: 'primary.100'
          }
        }
      }
    }
  }
};

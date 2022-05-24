export const Button = {
  sizes: {
    default: {
      px: '20px',
      py: '14px',
      minW: '195px',
      height: '50px',
      fontWeight: 'normal'
    },
    autoSize: {},
    extraSmall: {
      px: '7px',
      py: '5px',
      minW: '30px',
      height: '20px',
      fontWeight: 'normal'
    },
    small: {
      px: '20px',
      py: '14px',
      minW: '205px',
      height: '50px',
      fontWeight: 'normal'
    },
    medium: {
      px: '20px',
      py: '14px',
      minW: '258px',
      height: '50px',
      fontWeight: 'normal'
    },
    large: {
      px: '20px',
      py: '14px',
      minW: '305px',
      height: '50px',
      fontWeight: 'normal'
    }
  },

  variants: {
    colorDefault: {
      bg: 'default.dark',
      color: 'primary.600',
      fontSize: '16px'
    },

    success: {
      bg: 'primary.100',
      color: 'default.dark',
      fontSize: '16px',
      lineHeight: '22px'
    },

    white: {
      bg: 'default.light',
      color: 'default.dark',
      border: '1px',
      fontSize: '16px'
    },

    noBorder: {
      border: 'none',
      fontSize: '14px'
    },

    muted: {
      bg: 'primary.200',
      color: 'default.light',
      fontSize: '16px'
    }
  },
  baseStyle: {
    _hover: {
      _disabled: {
        bg: ''
      }
    },
    _focus: {
      boxShadow: ''
    }
  }
};

const size = {
  default: {
    fontSize: '18px',
    h: 55,
    borderRadius: '1px',
    px: '12px'
  }
};

export const Input = {
  sizes: {
    default: {
      field: size.default
    }
  },
  variants: {
    outline: {
      field: {
        borderColor: 'primary.400',
        _hover: {
          borderColor: 'default.dark'
        }
      }
    }
  }
};

export const Select = {
  sizes: {
    default: {
      field: {
        h: '55px',
        fontSize: '18px',
        pl: '20px'
      }
    },
    small: {
      field: {
        h: '48px',
        fontSize: '18px',
        pl: '15px'
      }
    },
    large: {
      field: {
        h: '62px',
        fontSize: '20px',
        pl: '20px'
      }
    }
  },

  variants: {
    default: {
      field: {
        border: '#c4c4c4 1px solid',
        borderRadius: '1px',
        cursor: 'pointer',
        _hover: {
          borderColor: 'default.dark'
        },
        _disabled: {
          _hover: {
            cursor: 'default',
            borderColor: '#c4c4c4'
          }
        },
        _invalid: {
          border: '#e53e3e 1px solid'
        }
      },
      icon: {
        pt: '5px'
      }
    }
  }
};

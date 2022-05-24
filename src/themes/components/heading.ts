export const Heading = {
  sizes: {
    default: {
      fontSize: '24px',
      lineHeight: '33px'
    },
    extraSmall: {
      fontSize: '16px',
      lineHeight: '22px'
    },
    small: {
      fontSize: '18px',
      lineHeight: '25px'
    },
    medium: {
      fontSize: '20px',
      lineHeight: '27px'
    },
    large: {
      fontSize: { xs: '24px', md: '36px' },
      lineHeight: { xs: '33px', md: '49px' }
    },
    extraLarge: {
      fontSize: '40px',
      lineHeight: '54px',
      fontWeight: 'bold'
    }
  },
  variants: {
    primary: {
      color: 'default.lightDark',
      fontWeight: 'bold'
    },
    secondary: {
      color: 'default.light',
      fontWeight: 'bold'
    },
    link: {
      color: 'default.darkGreen',
      fontWeight: '600'
    },
    subHeader: {
      color: 'default.lightDark',
      fontWeight: '600'
    }
  }
};

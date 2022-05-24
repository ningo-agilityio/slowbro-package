import TriangleArea from 'src/assets/images/triangle-area.png';

export const layerStyles = {
  base: {
    border: '0.5px solid',
    borderColor: 'primary.800',
    boxShadow:
      '0px 4px 4px rgba(0, 0, 0, 0.06), 1px -2px 4px rgba(0, 0, 0, 0.06)'
  },
  dashboard: {
    header: {
      w: '100%',
      minHeight: '220px',
      py: '50px',
      bgImage: ''
    },
    card: {
      boxShadow: '1px 1px 2px #e0e0e0',
      minH: '105px',
      bg: 'white',
      py: '25px',
      pl: '30px',
      pr: { xs: '10px', md: '35px' }
    },
    cardType: {
      boxShadow: '1px 1px 2px #e0e0e0',
      minH: { xs: '180px', md: '105px' },
      bg: 'white',
      py: '25px',
      pl: { xs: '20px', md: '30px' },
      pr: { xs: '10px', md: '35px' }
    }
  },

  view_transactions: {
    card: {
      height: '44px',
      py: '25px',
      pl: '30px',
      pr: '35px',
      borderRight: '1px',
      borderColor: 'divider.100'
    }
  },

  payees: {
    card: {
      minH: '105px',
      py: '25px',
      pl: '30px',
      pr: '35px',
      borderRight: '1px',
      borderColor: 'divider.100'
    }
  },

  payeeLayout: {
    boxShadow: '1px 1px 2px #E0E0E0',
    position: 'relative',
    bottom: '35px',
    w: '100%',
    bgColor: 'white',
    py: '40px'
  },

  transferLayout: {
    boxShadow: '1px 1px 2px #E0E0E0',
    position: 'relative',
    top: '-35px',
    w: '100%',
    bgColor: 'white',
    py: '40px'
  },

  dot: {
    w: '4px',
    h: '4px',
    bgColor: '#333333',
    borderRadius: '50%'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    bgColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 2
  },
  center: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  appLayer: {
    bgColor: 'primary.600',
    minH: '100vh'
  },
  onboardingLayer: {
    bgColor: 'white',
    minH: '100vh'
  },
  baseLayer: {
    xl: {
      bgPosition: 'center center',
      bgRepeat: 'no-repeat',
      bgAttachment: 'fixed',
      bgSize: 'cover',
      minH: '100vh',
      bgColor: 'default.dark',
      bgImage: TriangleArea
    },
    lg: {
      bgPosition: 'center center',
      bgRepeat: 'no-repeat',
      bgAttachment: 'fixed',
      bgSize: 'cover',
      minH: '100vh',
      bgColor: 'default.dark',
      bgImage: TriangleArea
    },
    md: {
      bgPosition: 'center center',
      bgRepeat: 'no-repeat',
      bgAttachment: 'fixed',
      bgSize: 'cover',
      minH: '100vh',
      bgColor: 'default.dark',
      bgImage: TriangleArea
    },
    sm: {
      bgPosition: 'center center',
      bgRepeat: 'no-repeat',
      bgAttachment: 'fixed',
      bgSize: 'cover',
      minH: '100vh',
      bgColor: 'default.dark',
      bgImage: TriangleArea
    }
  }
};

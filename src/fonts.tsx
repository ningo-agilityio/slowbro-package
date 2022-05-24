import React from 'react';
import { Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'regularFont';
        src: url('/assets/font/NotoSans-Regular.ttf') format('TrueType');
      }
      @font-face {
        font-family: 'boldFont';
        src: url('/assets/font/NotoSans-Bold.ttf') format('TrueType');
      }
      @font-face {
        font-family: 'italicFont';
        src: url('/assets/font/NotoSans-Italic.ttf') format('TrueType');
      }
      @font-face {
        font-family: 'boldItalicFont';
        src: url('/assets/font/NotoSans-NotoSans-BoldItalic.ttf') format('TrueType');
      }
    `}
  />
);
export default Fonts;

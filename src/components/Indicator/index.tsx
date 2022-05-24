import React from 'react';

// Chakra UI
import {
  Text,
  Box as BoxChakra,
  Img as ImgChakra,
  BoxProps
} from '@chakra-ui/react';

// Spinner
import Spinner from '../../assets/images/spinner.png';

// Style
import styles from './Indicator.module.css';

interface IndicatorProps extends BoxProps {
  type: 'full' | 'internal' | 'section';
  description?: string;
  btnFontSize?: number;
  btnColor?: string;
}

export const Indicator = ({
  type,
  description = 'The page is loading ...',
  btnFontSize = 16,
  btnColor = 'default.lightDark',
  ...props
}: IndicatorProps) => {
  const isFull = type === 'full';
  const isFullOrSection = type === 'full' || type === 'section';

  return (
    <BoxChakra
      {...props}
      m="0 auto"
      display={isFullOrSection ? 'flex' : 'inline-flex'}
      flexDirection={isFullOrSection ? 'column' : 'row'}
      alignContent={isFull ? 'center' : 'inherit'}
      justifyContent={isFull ? 'flex-start' : 'inherit'}
      gridColumnGap={isFullOrSection ? '0px' : '10px'}
    >
      <ImgChakra
        htmlHeight={isFull ? 68 : 28}
        htmlWidth={isFull ? 68 : 28}
        ml="auto"
        mr="auto"
        className={styles.rotate}
        src={Spinner}
        alt="loading"
      />
      {!!description.trim() && (
        <Text
          ml="auto"
          mr="auto"
          mt={isFullOrSection ? '32px' : '0px'}
          fontSize={btnFontSize}
          color={btnColor}
        >
          {description}
        </Text>
      )}
    </BoxChakra>
  );
};

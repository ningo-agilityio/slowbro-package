import React from 'react';

// Chakra ui lib
import { Flex } from '@chakra-ui/react';

// Components
import { Indicator } from 'src/components/Indicator';

interface LoadingIndicatorProps {
  text: string;
}

export const LoadingIndicator = ({ text }: LoadingIndicatorProps) => (
  <Flex
    position="fixed"
    top="0"
    left="0"
    right="0"
    bottom="0"
    width="100%"
    height="100vh"
    background="default.overlay"
    flexDir="column"
    justifyContent="center"
    alignItems="center"
    zIndex={3}
  >
    <Indicator type="full" description={text} />
  </Flex>
);

import './App.css'
import { Button } from 'src/components/Button'
import { ChakraProvider, Box } from '@chakra-ui/react';
import { CHAKRA_THEME } from 'src/themes/chakra';
import Fonts from 'src/fonts';

function App() {
  return (
    <ChakraProvider theme={CHAKRA_THEME}>
      <Fonts />
      <Box layerStyle="baseLayer.xl">
        <Button label={"Hello Slowbro!"} size='default' variant='success' />
        </Box>
    </ChakraProvider>
  )
}

export default App

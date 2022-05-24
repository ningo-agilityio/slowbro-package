// Import the global style enabling tailwind classes
import 'src/styles/App.css'
import { ChakraProvider } from '@chakra-ui/react';
import { CHAKRA_THEME } from 'src/themes/chakra'
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

//  Font family
import Fonts from 'src/fonts';

export const decorators = [
  (Story) => (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <ChakraProvider theme={CHAKRA_THEME}>
        <Fonts />
        <Story />
      </ChakraProvider>
    </MuiPickersUtilsProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

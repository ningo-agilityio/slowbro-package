import { extendTheme } from '@chakra-ui/react';
import { Button } from './components/button';
import { Checkbox } from './components/checkbox';
import { colors } from './colors';
import { fonts } from './fonts';
import { space } from './spacing';
import { Heading } from './components/heading';
import { Select } from './components/select';
import { Text } from './components/text';
import { Container } from './components/container';
import { Input } from './components/input';
import { PinInput } from './components/pin-input';
import { Menu } from './components/menu';
import { layerStyles } from './layerStyles';
import { FormLabel, FormError, Form } from './components/form-control';
import { breakpoints } from './breakpoints';

const overrides = {
  components: {
    Button,
    Checkbox,
    Heading,
    Select,
    Text,
    Input,
    Container,
    FormLabel,
    FormError,
    Form,
    PinInput,
    Menu
  },
  colors,
  fonts,
  space,
  layerStyles,
  breakpoints
};

export const CHAKRA_THEME = extendTheme(overrides);

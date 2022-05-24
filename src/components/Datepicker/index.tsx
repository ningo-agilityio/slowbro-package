// Library
import React, { FocusEvent } from 'react';

// material ui
import { KeyboardDatePicker } from '@material-ui/pickers';
import {
  createTheme,
  makeStyles,
  ThemeProvider
} from '@material-ui/core/styles';

// constant
import { FormatDate } from 'src/constants/date';

import './Datepicker.css';

interface DatepickerProps {
  dateFormat?: FormatDate;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  name?: string;
  value?: Date;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  onError?: (error: string, value) => void;
  onChange?: (date: Date) => void;
  error?: boolean;
  helperText?: React.ReactNode;
}

const defaultMaterialTheme = createTheme({
  palette: {
    primary: {
      main: '#2ae56f'
    }
  }
});

const useStyles = makeStyles({
  root: {
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      'border-color': '#3182ce'
    }
  }
});

export const Datepicker = ({
  dateFormat = FormatDate.Default,
  minDate,
  value = new Date(),
  placeholder = dateFormat,
  maxDate,
  onBlur,
  name,
  helperText = '',
  error = false,
  onError,
  onChange,
  ...props
}: DatepickerProps) => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <KeyboardDatePicker
        name={name}
        fullWidth
        inputVariant="outlined"
        clearable
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        maxDate={maxDate}
        minDate={minDate}
        format={dateFormat}
        onBlur={onBlur}
        onError={onError}
        helperText={helperText}
        error={error}
        className={classes.root}
        {...props}
      />
    </ThemeProvider>
  );
};

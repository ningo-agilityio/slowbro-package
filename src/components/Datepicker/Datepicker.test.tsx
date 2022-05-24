// Library
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { expect } from '@jest/globals';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

// Util
import { dateToString } from 'src/utils/datepicker';

// Component
import { Datepicker } from './index';

// Constant
import { FormatDate } from 'src/constants/date';

describe('Datepicker render', () => {
  afterEach(cleanup);

  it('should render without error', () => {
    const { container } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Datepicker />
      </MuiPickersUtilsProvider>
    );

    expect(container).toBeTruthy();
  });

  it('should render day now', () => {
    const date = new Date();

    const { container } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Datepicker dateFormat={FormatDate.FormatTwo} value={date} />
      </MuiPickersUtilsProvider>
    );

    const datepickerValue = container.querySelector('input').value;

    expect(datepickerValue).toBe(dateToString(date, FormatDate.FormatTwo));
  });

  it('it should render correct placeholder text', () => {
    const { container } = render(
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Datepicker dateFormat={FormatDate.FormatFour} />
      </MuiPickersUtilsProvider>
    );

    const datepicker = container.querySelector('input');

    const { placeholder } = datepicker;

    expect(placeholder).toBe(FormatDate.FormatFour);
  });
});

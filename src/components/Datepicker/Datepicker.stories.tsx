// Library
import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import { Datepicker } from './index';

// Constant
import { FormatDate } from 'src/constants/date';

export default {
  title: 'Components/Datepicker',
  component: Datepicker
} as ComponentMeta<typeof Datepicker>;

const Template: ComponentStory<typeof Datepicker> = args => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <Datepicker value={selectedDate} onChange={handleDateChange} {...args} />
  );
};

export const DateFormat1 = Template.bind({});
DateFormat1.args = {
  dateFormat: FormatDate.Default
};

export const DateFormat2 = Template.bind({});
DateFormat2.args = {
  dateFormat: FormatDate.FormatTwo
};

export const DateFormat3 = Template.bind({});
DateFormat3.args = {
  dateFormat: FormatDate.FormatThree
};

export const DateFormat4 = Template.bind({});
DateFormat4.args = {
  dateFormat: FormatDate.FormatFour
};

import React from 'react';
import Storybook from '@storybook/react';
import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button
} as Storybook.ComponentMeta<typeof Button>;

const Template: Storybook.ComponentStory<typeof Button> = args => (
  <Button label="Submit" {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  size: 'default',
  variant: 'white'
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'default',
  variant: 'colorDefault'
};

export const PrimaryThemed = Template.bind({});
PrimaryThemed.args = {
  size: 'default',
  variant: 'noBorder'
};

export const SecondaryThemed = Template.bind({});
SecondaryThemed.args = {
  size: 'default',
  variant: 'success'
};

export const Loading = Template.bind({});
Loading.args = {
  size: 'default',
  isLoading: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'default',
  isDisabled: true
};

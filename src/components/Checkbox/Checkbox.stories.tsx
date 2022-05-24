// Library
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

// Component
import { Checkbox } from './index';

export default {
  title: 'Components/Checkbox',
  component: Checkbox
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = args => (
  <Checkbox label="Checkbox" {...args} />
);

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {
  variant: 'primary',
  size: 'default'
};

export const SmallCheckbox = Template.bind({});
SmallCheckbox.args = {
  variant: 'primary',
  size: 'small'
};

export const LargeCheckbox = Template.bind({});
LargeCheckbox.args = {
  variant: 'primary',
  size: 'large'
};

export const Disable = Template.bind({});
Disable.args = {
  variant: 'primary',
  size: 'default',
  isDisabled: true
};

export const IsChecked = Template.bind({});
IsChecked.args = {
  variant: 'primary',
  size: 'default',
  defaultIsChecked: true
};

export const SecondaryThemed = Template.bind({});
SecondaryThemed.args = {
  variant: 'secondary',
  size: 'default'
};

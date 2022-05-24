import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Indicator } from './index';

export default {
  title: 'Components/Indicator',
  component: Indicator
} as ComponentMeta<typeof Indicator>;

const Template: ComponentStory<typeof Indicator> = args => (
  <Indicator {...args} />
);

export const IndicatorWithText = Template.bind({});
IndicatorWithText.args = {
  type: 'internal',
  description: 'The information is processing ...'
};

export const IndicatorWithoutText = Template.bind({});
IndicatorWithoutText.args = {
  type: 'internal',
  description: ''
};

export const IndicatorFullScreen = Template.bind({});
IndicatorFullScreen.args = {
  type: 'full',
  description: 'Verifying Information...'
};

export const VerticalIndicatorSection = Template.bind({});
VerticalIndicatorSection.args = {
  type: 'internal',
  description: 'Additional Information loading...'
};

export const HorizontalIndicatorSection = Template.bind({});
HorizontalIndicatorSection.args = {
  type: 'section',
  description: 'Verifying Information'
};

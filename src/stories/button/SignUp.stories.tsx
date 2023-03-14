import React from 'react';
import { SignUp } from './SignUp';
import { ComponentMeta, ComponentStory } from '@storybook/react';

type TSignUp = ComponentStory<typeof SignUp>;

const bgColors = [
  'white',
  'green',
  'aqua',
  'violet',
  'pink',
  'yellow',
] as const;

export default {
  title: 'Button/SignUp',
  component: SignUp,
  argTypes: {
    size: {
      description: 'Button size',
      control: 'radio',
      options: ['medium', 'large'],
    },
    textColor: {
      description: 'color of text in button',
      control: 'radio',
      options: ['white', 'black'],
    },
    border: {
      description: 'use border in button or not',
      control: 'radio',
      options: ['none', 'rounded'],
    },
    bgColor: {
      description: 'color of background button',
      control: {
        type: 'color',
        presetColors: [...bgColors],
      },
    },
  },
} as ComponentMeta<typeof SignUp>;

export const Template: TSignUp = (args) => <SignUp {...args} />;

export const SignUpDefault = Template.bind({});
SignUpDefault.args = {
  size: 'medium',
  textColor: 'black',
  border: 'rounded',
  bgColor: 'white',
  padding: 'medium',
};

export const SignUpPrimary = Template.bind({});
SignUpPrimary.args = {
  size: 'medium',
  text: 'Sign Up',
  textColor: 'white',
  border: 'none',
  bgColor: 'green',
  padding: 'medium',
};

export const SignUpSecondary = Template.bind({});
SignUpSecondary.args = {
  size: 'medium',
  text: 'Sign Up',
  textColor: 'black',
  border: 'none',
  bgColor: 'white',
  padding: 'medium',
};

export const SignUpOutlined = Template.bind({});
SignUpOutlined.args = {
  size: 'medium',
  text: 'Sign Up',
  textColor: 'black',
  border: 'rounded',
  bgColor: 'white',
  padding: 'medium',
};

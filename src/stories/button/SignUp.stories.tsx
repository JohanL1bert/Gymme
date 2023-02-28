/* eslint-disable no-unused-vars */
import { SignUp } from './SignUp';
import { StoryObj, Meta } from '@storybook/react';

type TSignUp = StoryObj<typeof SignUp>;
enum EVisual {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  OUTLINED = 'outlined',
}

export type TVisualBtn = `${EVisual}`;

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
    /*     visualBtn: {
      description: 'visual of button sign up: border, color, outlined',
      control: {
        type: 'select',
        options: [
          EVisual.DEFAULT,
          EVisual.PRIMARY,
          EVisual.SECONDARY,
          EVisual.OUTLINED,
        ],
      },
    }, */
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
} as Meta<typeof SignUp>;

export const SignUpDefault: TSignUp = {
  args: {
    size: 'medium',
    textColor: 'black',
    border: 'rounded',
    bgColor: 'white',
  },
};

export const SignUpPrimary: TSignUp = {
  args: {
    size: 'medium',
    text: 'Sign Up',
    textColor: 'white',
    border: 'none',
    bgColor: 'green',
  },
};

export const SignUpSecondary: TSignUp = {
  args: {
    size: 'medium',
    text: 'Sign Up',
    textColor: 'black',
    border: 'none',
    bgColor: 'white',
  },
};

export const SignUpOutlined: TSignUp = {
  args: {
    size: 'medium',
    text: 'Sign Up',
    textColor: 'black',
    border: 'rounded',
    bgColor: 'white',
  },
};

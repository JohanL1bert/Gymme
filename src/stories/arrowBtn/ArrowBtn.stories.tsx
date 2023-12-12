import React from 'react';
import { ArrowBtn } from './ArrowBtn';
import { ComponentMeta, ComponentStory } from '@storybook/react';

type TArrowBtn = ComponentStory<typeof ArrowBtn>;

export default {
  title: 'Button/ArrowBtn',
  component: ArrowBtn,
} as ComponentMeta<typeof ArrowBtn>;

export const Template: TArrowBtn = (args) => <ArrowBtn {...args} />;

export const ArrowBtnDefault = Template.bind({});
ArrowBtnDefault.args = {
  size: 'small',
  direction: 'up',
};

export const ArrowBtnBig = Template.bind({});
ArrowBtnBig.args = {
  size: 'big',
  direction: 'up',
  hover: true,
};

export const ArrowBtnBingDirectionLeft = Template.bind({});
ArrowBtnBingDirectionLeft.args = {
  size: 'big',
  direction: 'left',
  hover: true,
};

export const ArrowBtnBingDirectionRight = Template.bind({});
ArrowBtnBingDirectionRight.args = {
  size: 'big',
  direction: 'right',
  hover: true,
};

export const ArrowBtnSmall = Template.bind({});
ArrowBtnSmall.args = {
  size: 'small',
  direction: 'up',
  hover: false,
};

export const ArrowBtnSmallDirectionDown = Template.bind({});
ArrowBtnSmall.args = {
  size: 'small',
  direction: 'down',
  hover: false,
};

export const ArrowBtnSmallDirectionRight = Template.bind({});
ArrowBtnSmallDirectionRight.args = {
  size: 'small',
  direction: 'right',
  hover: false,
};

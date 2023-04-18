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
};

export const ArrowBtnSmall = Template.bind({});
ArrowBtnSmall.args = {
  size: 'small',
  direction: 'up',
};

export const ArrowBtnSmallDirectionDown = Template.bind({});
ArrowBtnSmall.args = {
  size: 'small',
  direction: 'down',
};

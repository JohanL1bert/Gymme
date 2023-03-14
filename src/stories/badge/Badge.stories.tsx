import React from 'react';
import { Badge } from './Badge';
import { ComponentMeta, ComponentStory } from '@storybook/react';

type TBadgeStory = ComponentStory<typeof Badge>;

export default {
  title: 'UI/BadgeButton',
  component: Badge,
  argTypes: {
    label: {
      description: 'badge button text',
      type: {
        name: 'string',
        required: true,
      },
    },
    visualBtn: {
      description: 'How would badge looks',
    },
    type: {
      description: 'type of button',
    },
  },
} as ComponentMeta<typeof Badge>;

const Template: TBadgeStory = (args) => <Badge {...args} />;

export const DefaultBtn = Template.bind({});
DefaultBtn.args = {
  visualBtn: 'dark',
  label: 'default',
  size: 'medium',
};

export const BlackBtn = Template.bind({});
BlackBtn.args = {
  visualBtn: 'dark',
  label: 'Premium',
  size: 'medium',
};

export const WhiteBtn = Template.bind({});
WhiteBtn.args = {
  visualBtn: 'white',
  label: 'Premium',
  size: 'medium',
};

import { Badge } from './Badge';
import { ComponentMeta, StoryObj } from '@storybook/react';

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

type TBadge = StoryObj<typeof Badge>;

export const DefaultBtn: TBadge = {
  args: {
    visualBtn: null,
    label: 'default',
  },
};
export const BlackBtn: TBadge = {
  args: {
    visualBtn: 'dark',
    label: 'Premium',
  },
};
export const whiteBtn: TBadge = {
  args: {
    visualBtn: 'white',
    label: 'Premium',
  },
};

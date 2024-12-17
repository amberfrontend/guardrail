import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from '../Button';

const meta = {
  title: 'Elements/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select' },
  },
  args: { onClick: fn(), onKeyDown: fn(), onTouchStart: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OverlayTrigger: Story = {
  args: {
    type: 'overlay-trigger',
    ariaControls: 'string',
    ariaExpanded: false,
    children: 'Stuff',
  },
  name: 'Overlay trigger',
};

export const IconOnly: Story = {
  args: {
    type: 'icon-only',
    ariaLabel: 'Pause',
    icon: 'pause',
    size: 'medium',
  },
  name: 'Icon only',
};

import type { Meta, StoryObj } from '@storybook/react';

import Image from '../Image';

const meta = {
  title: 'Elements/Image',
  component: Image,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select' },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const OverlayTrigger: Story = {
  args: {
    type: 'decorative',
    src: '/',
  },
  name: 'Decorative',
};

export const IconOnly: Story = {
  args: {
    type: 'informative',
    alt: 'Proper alt text',
    src: '/',
  },
  name: 'Informative',
};

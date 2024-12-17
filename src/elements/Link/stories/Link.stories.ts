import type { Meta, StoryObj } from '@storybook/react';

import Link from '../Link';

const meta = {
  title: 'Elements/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['regular', 'image-link', 'bypass-block'],
    },
    style: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextLink: Story = {
  args: {
    href: '/',
    text: 'Reports',
    type: 'text',
  },
  name: 'Text link',
};

export const LinkStyledAsPrimaryButton: Story = {
  args: {
    href: '/',
    style: 'primary',
    text: 'Reports',
    type: 'button',
  },
  name: 'Link styled as button',
};

export const ImageLink: Story = {
  args: {
    ariaLabel: 'Try Guardrail',
    href: '/',
    imageSrc: '/',
    type: 'image',
  },
  name: 'Image link',
};

export const BypassBlock: Story = {
  args: {
    text: 'Reports',
    mainId: 'main-section',
    type: 'bypass-block',
  },
  name: 'Bypass block',
};

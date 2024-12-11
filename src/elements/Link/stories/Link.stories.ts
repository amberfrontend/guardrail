import type { Meta, StoryObj } from '@storybook/react';

import Link from '../Link';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Elements/Link',
  component: Link,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
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
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const TextLink: Story = {
  args: {
    href: '/',
    text: 'Reports',
    type: 'text',
  },
};

export const LinkStyledAsPrimaryButton: Story = {
  args: {
    href: '/',
    style: 'primary',
    text: 'Reports',
    type: 'button',
  },
};

export const LinkStyledAsSecondaryButton: Story = {
  args: {
    href: '/',
    style: 'secondary',
    text: 'Reports',
    type: 'button',
  },
};

export const ImageLink: Story = {
  args: {
    ariaLabel: 'Try Guardrail',
    href: '/',
    imageSrc: '/',
    type: 'image',
  },
};

export const BypassBlock: Story = {
  args: {
    text: 'Reports',
    mainId: 'main-section',
    type: 'bypass-block',
  },
};
